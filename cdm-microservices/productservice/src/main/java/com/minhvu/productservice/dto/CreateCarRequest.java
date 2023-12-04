package com.minhvu.productservice.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class CreateCarRequest {
    private String name;
    private String image;
    private BigDecimal price;
    private String description;
    private String model;
}
