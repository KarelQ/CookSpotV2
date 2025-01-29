package com.example.cookspot.controller;

import com.example.cookspot.dto.PostDTO;
import com.example.cookspot.entity.Category;
import com.example.cookspot.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @Operation(
            summary = "Get all category names",
            description = "Fetches and returns a list of all category names available in the system."
    )
    @GetMapping("/api/category/names")
    public List<String> getAllPostsDTO() {
        return categoryService.getAllCategoriesNames();
    }


    @Operation(
            summary = "Get all categories",
            description = "Fetches and returns a list of all categories available in the system."
    )
    @GetMapping(("/api/category"))
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }
}