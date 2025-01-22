package com.example.cookspot.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @Column(name = "id_role", nullable = false)
    private Integer id;

    @Column(name = "role_desc", nullable = false, length = 20)
    private String roleDesc;

}