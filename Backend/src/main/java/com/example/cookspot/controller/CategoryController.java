package com.example.cookspot.controller;

import com.example.cookspot.dto.PostDTO;
import com.example.cookspot.entity.Category;
import com.example.cookspot.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("/api/category")
    public List<String> getAllPostsDTO() {
        return categoryService.getAllCategories();
    }
}