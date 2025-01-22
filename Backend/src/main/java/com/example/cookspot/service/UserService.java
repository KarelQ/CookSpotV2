package com.example.cookspot.service;
import com.example.cookspot.repository.UserRepository;
import com.example.cookspot.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    //for testing, to be deleted
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public User createUser(User project) {
        return userRepository.save(project);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}