package com.minhvu.productservice.dto;

import lombok.Data;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

@Data
public class CreateProductRequest {
    private String name;
    private MultipartFile image;
    private BigDecimal price;
    private String description;
    private String category;
}
