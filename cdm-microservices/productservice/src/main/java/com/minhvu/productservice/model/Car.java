package com.minhvu.productservice.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document(value = "cars")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String image_url;
    private String name;
    private String description;
    private BigDecimal price;
    private String model;
    @Enumerated(EnumType.STRING)
    private Status status;
}