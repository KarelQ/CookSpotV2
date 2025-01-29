package com.example.cookspot.controller;

import com.example.cookspot.dto.PostDTO;
import com.example.cookspot.entity.Post;
import com.example.cookspot.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;



@RestController
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }


    @Operation(
            summary = "Retrieve a list of all posts",
            description = "Fetches a list of all posts from the database and returns it in the form of PostDTO objects. This provides an overview of all available posts."
    )
    @GetMapping("/api/posts")
    public List<PostDTO> getAllPostsDTO() {
        return postService.getAllPostsDTO();
    }


    @Operation(
            summary = "Retrieve a post by its ID",
            description = "Fetches a single post based on the provided post ID and returns it as a PostDTO object. This allows retrieving detailed information about a specific post."
    )
    @GetMapping("/api/posts/{id}")
    public PostDTO getPostDTOById(@PathVariable String id) {
        return postService.getPostDTOById(id);
    }


    @Operation(
            summary = "Retrieve posts by user ID",
            description = "Fetches a list of posts that belong to the user with the provided user ID. This allows retrieving all posts created by a specific user."
    )
    @GetMapping("/api/posts/user/{id}")
    public List<Post> getPostDTOByUserId(@PathVariable String id) {
        return postService.getPostsByUserId(id);
    }


    @Operation(
            summary = "Retrieve posts by category ID",
            description = "Fetches a list of posts that belong to the category identified by the provided category ID. This allows retrieving all posts associated with a specific category."
    )
    @GetMapping("/api/posts/category/{id}")
    public List<Post> getPostDTOByCategoryId(@PathVariable String id) {
        return postService.getPostDTOByCategoryId(id);
    }


    @Operation(
            summary = "Create a new post",
            description = "Adds a new post to the database. The post details are provided in the request body as a PostDTO object. Returns the created post with a 201 status code."
    )
    @PostMapping("/api/posts/addpost")
        public ResponseEntity<PostDTO> createPost(@RequestBody PostDTO postDTO) {
        PostDTO savedPost = postService.savePost(postDTO);
        return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
    }


    @Operation(
            summary = "Delete a post",
            description = "Deletes a post from the database based on the provided post ID. Returns a 204 status code (No Content) if the deletion is successful."
    )
    @DeleteMapping("/api/posts/delete/{id}")
    public String deletePost(@PathVariable String id) {
        postService.deletePost(id);
        return "deleted";
    }
}