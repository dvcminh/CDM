package com.minhvu.authservice.service;

import com.minhvu.authservice.dto.RegisterRequest;
import com.minhvu.authservice.entity.User;
import com.minhvu.authservice.repository.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserCredentialRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public String saveUser(RegisterRequest credential) {
        var user = User.builder()
                .name(credential.getName())
                .email(credential.getEmail())
                .password(passwordEncoder.encode(credential.getPassword()))
                .role(credential.getRole())
                .address(credential.getAddress())
                .phone_number(credential.getPhone_number())
                .avatar(credential.getAvatar())
                .build();
        repository.save(user);
        return "user added to the system";
    }

    public String generateToken(String username) {
        return jwtService.generateToken(username);
    }

    public void validateToken(String token) {
        jwtService.validateToken(token);
    }

    public User getUserByUserName(String userName) {
        return repository.findByName(userName).orElseThrow(() -> new RuntimeException("user not found"));
    }
}
