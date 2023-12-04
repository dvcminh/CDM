package com.hoangminh.userservice.controller;

import com.hoangminh.userservice.model.User;
import com.hoangminh.userservice.repository.UserSerivceRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/user")

public class usercontroller {
    private final UserSerivceRepository userrepository;

    public usercontroller(UserSerivceRepository userrepository) {
        this.userrepository = userrepository;
    }


    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllUser() {
        return ResponseEntity.ok(this.userrepository.findAll());
    }

    @PostMapping("/create")
    public ResponseEntity<User> createNewUser(@RequestBody User userreq) {

        User user = new User();
        user.setEmail(userreq.getEmail());
        user.setUsername(userreq.getUsername());
        user.setFullname(userreq.getFullname());
        user.setPass(userreq.getPass());
        user.setRole(userreq.getRole());
        return ResponseEntity.status(201).body(this.userrepository.save(user));
    }

    @GetMapping("/login/{email}&{password}")
    public User  login (@PathVariable String email, @PathVariable String password) {
        Optional<User> user = this.userrepository.findByEmail(email);

        if (user.isPresent()) {
            User foundUser = user.get();
            if(foundUser.getPass().equals(password))
                return foundUser;
            else
                return null;
        }
        return null;
    }

}

