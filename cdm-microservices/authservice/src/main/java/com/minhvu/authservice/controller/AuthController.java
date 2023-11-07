package com.minhvu.authservice.controller;

import com.minhvu.authservice.dto.AuthenticationRequest;
import com.minhvu.authservice.dto.RegisterRequest;
import com.minhvu.authservice.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService service;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/hello")
    public String hello() {
        return "hello from secured endpoint";
    }

    @PostMapping("/register")
    public String addNewUser(@RequestBody RegisterRequest user) {
        return service.saveUser(user);
    }

    @PostMapping("/login")
    public String getToken(@RequestBody AuthenticationRequest authRequest) {
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authenticate.isAuthenticated()) {
            return service.generateToken(authRequest.getUsername());
        } else {
            throw new RuntimeException("invalid access");
        }
    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token) {
        service.validateToken(token);
        return "Token is valid";
    }
}
