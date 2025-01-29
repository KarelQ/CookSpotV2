package com.example.cookspot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Getter
@Setter
@Entity
@Table(name = "users_details")
public class UserDetails {
    @Id
    @Column(name = "id_users_details", nullable = false, length = 50)
    private String idUsersDetails;

    @Column(name = "first_name", length = 30)
    private String firstName;

    @Column(name = "last_name", length = 50)
    private String lastName;

    @Column(name = "city", length = 50)
    private String city;

    @Column(name = "street_name", length = 50)
    private String streetName;

    @Column(name = "street_address", length = 20)
    private String streetAddress;

    @Column(name = "postal_code", length = 20)
    private String postalCode;

    @Column(name = "state", length = 50)
    private String state;

    @Column(name = "country", length = 50)
    private String country;

    @JsonIgnore
    @OneToOne(mappedBy = "userDetails")
    private User user;



}