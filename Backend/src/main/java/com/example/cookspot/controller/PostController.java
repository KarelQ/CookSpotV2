package com.example.cookspot.controller;

import com.example.cookspot.entity.Post;
import com.example.cookspot.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostService postService;


    @GetMapping()
    public ResponseEntity<List<Post>> getAllPosts() {

        List<Post> temp = postService.getAllPosts();
        if(!temp.isEmpty()) {
            return ResponseEntity.ok(temp);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Post createPost(@RequestBody Post project) {
        return postService.createPost(project);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable String id) {
        postService.deletePost(id);
        return ResponseEntity.noContent().build();
    }
}