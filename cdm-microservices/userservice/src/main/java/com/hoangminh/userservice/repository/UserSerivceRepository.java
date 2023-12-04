package com.hoangminh.userservice.repository;

import com.hoangminh.userservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserSerivceRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);

}
