package com.minhvu.authservice.controller;

import com.minhvu.authservice.config.CustomUserDetailsService;
import com.minhvu.authservice.dto.*;
import com.minhvu.authservice.mapper.UserMapper;
import com.minhvu.authservice.entity.User;
import com.minhvu.authservice.service.AuthService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
@Slf4j
public class AuthController {
    @Autowired
    private AuthService service;

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private CustomUserDetailsService userDetailsService;
    @PostMapping("/register")
    public String addNewUser(@RequestBody RegisterRequest user) {
        return service.saveUser(user);
    }

    @PostMapping("/login")
    public String getToken(@RequestBody AuthenticationRequest authRequest) {
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authenticate);
        if (authenticate.isAuthenticated()) {
            return service.generateToken(authRequest.getEmail());
        } else {
            throw new RuntimeException("invalid access");
        }
    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token) {
        service.validateToken(token);
        return "Token is valid";
    }

    @GetMapping("/me")
    public UserDto getCurrentUser2(@RequestParam("name") String name) {
        return userMapper.toUserDto(service.getUserByUserName(name));
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<Page<User>> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "name") String sortBy,
            @RequestParam(defaultValue = "ASC") Sort.Direction direction
    ) {
        Page<User> userPage = service.getAllUsers(PageRequest.of(page, size, Sort.by(direction, sortBy)));
        return ResponseEntity.ok(userPage);
    }
    @PostMapping("/updateUser")
    public String updateUser(@RequestBody UpdateUserInformationRequest userDto) {
        return service.updateUser(userDto);
    }

    @PatchMapping("/changePassword")
    public ResponseEntity<String> changePassword(
            @RequestBody ChangePasswordRequest request
    ) {
        return ResponseEntity.ok(service.changePassword(request));
    }
}
