package com.example.cookspot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "users")
public class User {
    @Id
    @Column(name = "id_user", nullable = false, length = 50)
    private String idUser;

    @Column(name = "id_role")
    private Integer idRole;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "password", nullable = false, length = 100)
    private String password;

    @Column(name = "username", nullable = false, length = 50)
    private String username;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_user", referencedColumnName = "id_users_details")
    private UserDetails userDetails;

//    @JsonIgnore
//    @ManyToMany
//    @JoinTable(
//            name = "bookmarks",
//            joinColumns = @JoinColumn(name = "id_post"),
//            inverseJoinColumns = @JoinColumn(name = "id_user"))
//    Set<Bookmark> userBookmarksList;


//    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
//    private List<Post> posts;



}