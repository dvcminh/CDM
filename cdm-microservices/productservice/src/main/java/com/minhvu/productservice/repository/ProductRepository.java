package com.minhvu.productservice.repository;

import com.minhvu.productservice.model.Product;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    List<Product> findAllByCategoryIgnoreCase(String category);
    List<Product> findByNameContainsAndCategoryAllIgnoreCase(String name, String category, Sort sort);
}
