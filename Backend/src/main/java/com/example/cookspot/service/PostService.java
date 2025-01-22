package com.example.cookspot.service;
import com.example.cookspot.repository.PostRepository;
import com.example.cookspot.entity.Post;
import com.example.cookspot.dto.PostDTO;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    private PostDTO convertPostToPostDTO(Post post) {
        PostDTO postDTO = new PostDTO();

        postDTO.setIdPost(post.getIdPost());
        postDTO.setTitle(post.getTitle());
        postDTO.setDescription(post.getDescription());
        postDTO.setIngredients(post.getIngredients());
        postDTO.setRecipe(post.getRecipe());
        postDTO.setImage(post.getImage());
        postDTO.setPrepTime(post.getPrepTime());
        postDTO.setDifficulty(post.getDifficulty());
        postDTO.setNumberOfServings(post.getNumberOfServings());
        postDTO.setCreatedAt(post.getCreatedAt());
        postDTO.setLike(post.getLike());
        postDTO.setDislike(post.getDislike());
        postDTO.setUsername(post.getUser().getUsername());

        return postDTO;

    }

    public List<PostDTO> getAllPostsDTO(){
        return postRepository.findAll()
                .stream()
                .map(this::convertPostToPostDTO)
                .collect(Collectors.toList());
    }

    public List<Post> getAllPosts() {
        List<Post> test = postRepository.findAll();

        for(Post p : test) {
            System.out.println(p.getUser().getUsername());
        }

        return postRepository.findAll();
    }


    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public Post getPostById(String id) {
        return postRepository.findById(id).orElse(null);
    }

    public void deletePost(String id) {
        postRepository.deleteById(id);
    }
}