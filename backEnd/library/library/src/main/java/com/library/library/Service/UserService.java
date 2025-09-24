package com.library.library.Service;

import com.library.library.DTO.LoginRequest;
import com.library.library.DTO.SignUpRequest;
import com.library.library.Model.User;
import com.library.library.Repo.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Sign Up
    public String signUp(SignUpRequest request) {
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return "Username already exists!";
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // ⚠️ not secure (no hashing)
        user.setPhoneNumber(request.getPhoneNumber());

        userRepository.save(user);
        return "User registered successfully!";
    }

    // Login
    public String login(LoginRequest request) {
        Optional<User> userOpt = userRepository.findByUsername(request.getUsername());

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (user.getPassword().equals(request.getPassword())) {
                return "Login successful!";
            } else {
                return "Invalid password!";
            }
        } else {
            return "User not found!";
        }
    }
}
