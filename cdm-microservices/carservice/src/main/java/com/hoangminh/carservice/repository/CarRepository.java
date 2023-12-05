package com.hoangminh.carservice.repository;

import com.hoangminh.carservice.model.Car;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CarRepository extends MongoRepository<Car, String> {
}
