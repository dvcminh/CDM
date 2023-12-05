package com.hoangminh.userservice.service;

import com.hoangminh.userservice.model.LoginMessage;
import com.hoangminh.userservice.model.User;
import com.hoangminh.userservice.repository.UserSerivceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserSerivceRepository userRepos;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public  List<User> getAllUser(){
        return this.userRepos.findAll();
    }

    @Override
    public User getUserById(String id){
        Optional<User> user = this.userRepos.findById(id);
        return user.orElse(null);
    }

    @Override
    public String addNewUser(User userreq) {
        User user = new User();
        user.setEmail(userreq.getEmail());
        user.setUsername(userreq.getUsername());
        user.setFullname(userreq.getFullname());
        user.setPass(this.passwordEncoder.encode(userreq.getPass()));
        user.setRole(userreq.getRole());
        return user.getId();
    }
    @Override
    public LoginMessage loginUser(User usereq) {
        Optional<User> user = this.userRepos.findByEmail(usereq.getEmail());
        if(user.isPresent()) {
            User foundUser = user.get();
            if (foundUser.getPass().equals(usereq.getPass())) {
                return new LoginMessage("Login successful",  foundUser.getId(), foundUser.getRole(), true);
            } else {
                return new LoginMessage("Login failed",  foundUser.getId(), foundUser.getRole(), false);
            }
        }
        else
            return new LoginMessage("Login failed",  usereq.getId(), usereq.getRole(), false);
    }
}
