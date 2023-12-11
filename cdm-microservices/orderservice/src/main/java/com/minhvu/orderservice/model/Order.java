package com.minhvu.orderservice.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Document(value = "orders")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String userId;
    private LocalDateTime orderDate;
    private BigDecimal totalAmount;
    private String paymentStatus;
    private String shippingStatus;
    private String shippingAddress;
    private Integer voucherValue;
    private Integer shippingValue;
}

