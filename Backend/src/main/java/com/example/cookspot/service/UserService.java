package com.example.cookspot.service;
import com.example.cookspot.entity.UserDetails;
import com.example.cookspot.repository.UserDetailsRepository;
import com.example.cookspot.repository.UserRepository;
import com.example.cookspot.entity.User;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserDetailsRepository userDetailsRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, UserDetailsRepository userDetailsRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.userDetailsRepository = userDetailsRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }
    
    //for testing, to be deleted
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public User addUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setIdRole(0);
        return userRepository.save(user);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    public User getUser(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public boolean passwordVerify(String rawPassword, String encodedPassword) {
        return bCryptPasswordEncoder.matches(rawPassword, encodedPassword);

    }


    public UserDetails getUserDetails(User user) {
        //User user = userRepository.findById(session.getAttribute("userId").toString()).orElse(null);
        System.out.println(user.getIdUser());
        return userDetailsRepository.findByUser(user);
    }

    public UserDetails addUserDetails(UserDetails userDetails, User user) {
        System.out.println(userDetails.getCity());
        userDetails.setIdUsersDetails(user.getIdUser());
        return userDetailsRepository.save(userDetails);
    }
}