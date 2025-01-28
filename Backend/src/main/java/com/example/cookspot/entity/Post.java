package com.example.cookspot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "posts")
public class Post {
    @Id
    @Column(name = "id_post", nullable = false, length = 50)
    private String idPost;

//    @Column(name = "id_user_owner", nullable = false)
//    private String idUserOwner;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false, length = Integer.MAX_VALUE)
    private String description;

    @Column(name = "ingredients", nullable = false, length = Integer.MAX_VALUE)
    private String ingredients;

    @Column(name = "recipe", nullable = false, length = Integer.MAX_VALUE)
    private String recipe;

    @Column(name = "image", nullable = false)
    private String image;

    @Column(name = "prep_time", nullable = false, length = 10)
    private String prepTime;

    @Column(name = "difficulty", nullable = false, length = 10)
    private String difficulty;

    @Column(name = "number_of_servings", nullable = false)
    private Integer numberOfServings;

    @Column(name = "created_at", nullable = false, length = 20)
    private String createdAt;

    @ColumnDefault("0")
    @Column(name = "likes", nullable = false)
    private Integer like;

    @ColumnDefault("0")
    @Column(name = "dislike", nullable = false)
    private Integer dislike;


    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "id_user_owner")
    private User user;

    @ManyToMany
    @JoinTable(
            name = "post_categories",
            joinColumns = @JoinColumn(name = "id_post"),
            inverseJoinColumns = @JoinColumn(name = "id_category"))
    Set<Category> postCategoriesList;



//    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
//    private List<PostCategory> postCategories = new ArrayList<>();

//    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
//    private String username;

//    @Transient
//    private String username; // Pole pochodzące z tabeli `users`

}