package com.example.cookspot.controller;

import com.example.cookspot.entity.User;
import com.example.cookspot.repository.UserRepository;
import com.example.cookspot.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//for testing, to be deleted
@RestController
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {

        this.userService = userService;
        this.userRepository = userRepository;
    }
    @GetMapping("/api/user")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/api/register")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/api/login")
    public String login(@RequestBody User user, HttpSession session) {
        User user1 = userService.getUserByEmail(user.getEmail());
        if (user1 != null && userService.passwordVerify(user.getPassword(), user1.getPassword())) {
            session.setAttribute("userId", user1.getIdUser());
            session.setAttribute("username", user1.getUsername());
            session.setAttribute("userIdRole", user1.getIdRole());
            return "success";
        }

        return "Welcome to User Profile";
    }

    @PostMapping("/api/logout")
    public String logout( HttpSession session) {
        session.invalidate();
        return "Logout successful";
    }


}