package com.example.cookspot.service;
import com.example.cookspot.entity.Category;
import com.example.cookspot.entity.User;
import com.example.cookspot.repository.CategoryRepository;
import com.example.cookspot.repository.PostRepository;
import com.example.cookspot.entity.Post;
import com.example.cookspot.dto.PostDTO;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import com.example.cookspot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CategoryRepository categoryRepository;

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
        postDTO.setIdUser(post.getUser().getIdUser());
        postDTO.setCategoryNames(
                post.getPostCategoriesList()
                        .stream()
                        .map(Category::getCategoryName) // Use map to get the category names
                        .collect(Collectors.toSet()) // Collect the results into a set
        );


        return postDTO;

    }

    public List<PostDTO> getAllPostsDTO(){
        return postRepository.findAll()
                .stream()
                .map(this::convertPostToPostDTO)
                .collect(Collectors.toList());
    }

    public PostDTO getPostDTOById(String id) {
        return convertPostToPostDTO(postRepository.findById(id).orElse(null));
    }


    public PostDTO savePost(PostDTO postDTO) {

        User user = userRepository.findById("1234").orElse(null);

        List<Category> category =  categoryRepository.findAllById(postDTO.getCategoryNames());

        Post post = new Post();
        post.setTitle(postDTO.getTitle());
        post.setDescription(postDTO.getDescription());
        post.setIngredients(postDTO.getIngredients());
        post.setRecipe(postDTO.getRecipe());

        post.setPrepTime(postDTO.getPrepTime());
        post.setDifficulty(postDTO.getDifficulty());
        post.setNumberOfServings(postDTO.getNumberOfServings());
        post.setIdPost(postDTO.getIdPost());
        post.setPostCategoriesList(category.stream().collect(Collectors.toSet()));


        post.setLike(0);
        post.setDislike(0);
        post.setUser(user);

        post.setImage("test");
        post.setCreatedAt("01.01.12");

        System.out.println(post.toString());

        Post savedPost = postRepository.save(post);
        return this.convertPostToPostDTO(post);
    }

    public List<Post> getAllPosts() {
        List<Post> test = postRepository.findAll();
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