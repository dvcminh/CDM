package com.minhvu.productservice.controller;

import com.minhvu.productservice.config.CloudinaryConfig;
import com.minhvu.productservice.dto.CreateProductRequest;
import com.minhvu.productservice.model.Product;
import com.minhvu.productservice.service.ProductService;
import com.minhvu.productservice.service.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping("/getAllProducts")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/getProductById/{id}")
    public Product getProductById(@PathVariable String id) {
        return productService.getProductById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<Product> createProduct(@RequestParam("name") String name,
                                                 @RequestParam("imageFile") MultipartFile imageFile,
                                                 @RequestParam("price") BigDecimal price,
                                                 @RequestParam("description") String description,
                                                 @RequestParam("selectedCategory") String category) {
        try {
            Product createdProduct = productService.createProduct(name, imageFile, price, description, category);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
