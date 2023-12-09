package com.minhvu.productservice.service;

import com.minhvu.productservice.dto.CreateCarRequest;
import com.minhvu.productservice.dto.UpdateCarRequest;
import com.minhvu.productservice.model.Car;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

public interface CarService {
    List<Car> getAllProducts();

    Car getProductById(String id);

    Car createProduct(CreateCarRequest createCarRequest) throws IOException;

    Car updateProduct(UpdateCarRequest updateCarRequest);
    List<Car> findProductByModelIgnoreCase(String category);

    void deleteProduct(String id);
}
