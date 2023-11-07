package com.minhvu.productservice.service;

import com.minhvu.productservice.dto.CreateProductRequest;
import com.minhvu.productservice.model.Product;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();

    Product getProductById(String id);

    Product createProduct(String name, MultipartFile imageFile, BigDecimal price, String description, String category) throws IOException;

}
