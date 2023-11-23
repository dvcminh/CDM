package com.minhvu.productservice.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document(value = "product")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Product {

    @Id
    private String id;
    private String image_url;
    private String name;
    private String description;
    private BigDecimal price;
    private String category;
    private String type;
    @Enumerated(EnumType.STRING)
    private Status status;
}