package com.hoangminh.userservice.service;

import com.hoangminh.userservice.model.LoginMessage;
import com.hoangminh.userservice.model.User;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public interface UserService {
    List<User> getAllUser();
    User getUserById(String id);
    String addNewUser(User user);
    LoginMessage loginUser(User loginDTO);
}
