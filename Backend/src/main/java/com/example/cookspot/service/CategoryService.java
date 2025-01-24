package com.example.cookspot.service;

import com.example.cookspot.entity.Category;
import com.example.cookspot.entity.Post;
import com.example.cookspot.repository.CategoryRepository;
import com.example.cookspot.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@AllArgsConstructor
@Service
public class CategoryService {
    private CategoryRepository categoryRepository;

    public List<String> getAllCategories() {
        return categoryRepository.findAll()
                .stream()
                .map(Category::getCategoryName)
                .collect(Collectors.toList());
    }

}





