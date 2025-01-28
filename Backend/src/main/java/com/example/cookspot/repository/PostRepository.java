package com.example.cookspot.repository;

import com.example.cookspot.entity.Category;
import com.example.cookspot.entity.Post;
import com.example.cookspot.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface PostRepository extends JpaRepository<Post, String> {

    List<Post> findByUser(User user);

    List<Post> findByPostCategoriesList(Set<Category> category);
}