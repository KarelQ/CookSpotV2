package com.example.cookspot.controller;

import com.example.cookspot.dto.PostDTO;
import com.example.cookspot.entity.Post;
import com.example.cookspot.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
public class PostController {
    private final PostService postService;


    @GetMapping("/api/posts")
    public List<PostDTO> getAllPostsDTO() {
        return postService.getAllPostsDTO();
    }

    @GetMapping("/api/posts/{id}")
    public PostDTO getPostDTOById(@PathVariable String id) {
        return postService.getPostDTOById(id);
    }



//    @PostMapping
//    public Post createPost(@RequestBody Post project) {
//        return postService.createPost(project);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deletePost(@PathVariable String id) {
//        postService.deletePost(id);
//        return ResponseEntity.noContent().build();
//    }
}