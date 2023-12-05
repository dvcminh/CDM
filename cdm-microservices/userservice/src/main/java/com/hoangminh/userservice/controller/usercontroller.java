package com.hoangminh.userservice.controller;

import com.hoangminh.userservice.model.LoginMessage;
import com.hoangminh.userservice.model.User;
import com.hoangminh.userservice.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/user")

public class usercontroller {
    private final UserService userSer;

    public usercontroller(UserService userSer) {
        this.userSer = userSer;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllUser() {
        return ResponseEntity.ok(userSer.getAllUser());
    }

    @GetMapping("/getUserById/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id){
        return ResponseEntity.ok(userSer.getUserById(id));
    }

    @PostMapping("/create")
    public String createNewUser(@RequestBody User userreq) {
        return userSer.addNewUser(userreq);
    }

    @PostMapping("/login")
    public LoginMessage login(@RequestBody User loginRequest) {
        return userSer.loginUser(loginRequest);
    }
}

