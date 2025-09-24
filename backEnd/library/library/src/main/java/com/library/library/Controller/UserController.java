package com.library.library.Controller;

import com.library.library.DTO.LoginRequest;
import com.library.library.DTO.SignUpRequest;
import com.library.library.Service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // SignUp endpoint
    @PostMapping("/signup")
    public String signUp(@RequestBody SignUpRequest request) {
        return userService.signUp(request);
    }

    // Login endpoint
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        return userService.login(request);
    }
}
