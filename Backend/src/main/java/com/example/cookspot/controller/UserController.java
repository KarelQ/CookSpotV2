package com.example.cookspot.controller;

import com.example.cookspot.entity.User;
import com.example.cookspot.entity.UserDetails;
import com.example.cookspot.repository.UserRepository;
import com.example.cookspot.security.CustomUserDetails;
import com.example.cookspot.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;


//for testing, to be deleted
@Tag(name = "Users", description = "Operations related to users")
@RestController
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private User sessionUser = null;


    public UserController(UserService userService, UserRepository userRepository, AuthenticationManager authenticationManager) {

        this.userService = userService;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
    }

    @Operation(
            summary = "Get logged-in user details",
            description = "Retrieves the details of the currently authenticated user based on the session.",
            security = @SecurityRequirement(name = "sessionAuth")
    )
    @GetMapping("/api/user")
    public UserDetails getUserDetails(HttpSession session) {
        //return userService.getUserDetails(session.getAttribute("userId").toString());
        return userService.getUserDetails(sessionUser);
    }

    @Operation(
            summary = "Get logged-in user",
            description = "Retrieves the currently authenticated user from the session."
    )

    @GetMapping("/api/sessionuser")
    public User getSessionUser() {
        //return userService.getUserDetails(session.getAttribute("userId").toString());
        return sessionUser;
    }


    @Operation(
            summary = "Add user details",
            description = "Adds details for the currently authenticated user."
    )

    @PostMapping("/api/userdetails")
    public UserDetails addUserDetails(@RequestBody UserDetails userdetails) {
        return userService.addUserDetails(userdetails, this.sessionUser);
    }


    @Operation(
            summary = "Register a new user",
            description = "Creates a new user account and returns the registered user details."
    )

    @PostMapping("/api/register")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }


    @Operation(
            summary = "Delete a user by ID",
            description = "Deletes a user with the specified ID from the system."
    )
    @DeleteMapping("/api/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }


    @Operation(
            summary = "Authenticate user and create a session",
            description = "Authenticates the user based on provided credentials and creates a session. Returns session information including user ID, username, and role ID."
    )

    @PostMapping("/api/login")
    public List<Object> login(@RequestBody User user, HttpSession session) {
        User user1 = userService.getUserByEmail(user.getEmail());
        List<Object> sessionData = new ArrayList<>();

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user1.getEmail(), user.getPassword())
            );

            CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

            session.setAttribute("userId", user1.getIdUser());
            session.setAttribute("username", user1.getUsername());
            session.setAttribute("userIdRole", user1.getIdRole());

            this.sessionUser = user1;

            sessionData.add(session.getAttribute("userId"));
            sessionData.add(session.getAttribute("username"));
            sessionData.add(session.getAttribute("userIdRole"));
            return sessionData;

        }catch (NullPointerException e) {
            System.out.println(e.getMessage());

            return null;
        }


        }

    //}

    @Operation(
            summary = "Log out the user and invalidate the session",
            description = "Terminates the user's session by invalidating it and logs the user out. Returns a success message indicating that the logout was successful."
    )

    @GetMapping("/api/logout")
    public String logout( HttpSession session) {
        session.invalidate();
        sessionUser = null;
        return "Logout successful";
    }



}