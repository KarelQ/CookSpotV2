package com.example.cookspot.dto;

import lombok.*;

import java.util.List;
import java.util.Set;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {
    private String idPost;
    private String title;
    private String description;
    private String ingredients;
    private String recipe;
    private String image;
    private String prepTime;
    private String difficulty;
    private Integer numberOfServings;
    private String createdAt;
    private Integer like;
    private Integer dislike;
    private String username;
    private String idUser;
    private Set<String> categoryNames;
}