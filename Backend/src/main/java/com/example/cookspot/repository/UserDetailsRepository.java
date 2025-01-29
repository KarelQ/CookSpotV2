package com.example.cookspot.repository;

import com.example.cookspot.entity.User;
import com.example.cookspot.entity.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDetailsRepository extends JpaRepository<UserDetails, String> {


    UserDetails findByUser(User user);
    //User findByEmail(String email);
}
