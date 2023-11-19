package com.minhvu.orderservice.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long id;


    private String userId;
    private LocalDateTime orderDate;
    private BigDecimal totalAmount;
    private String paymentStatus;
    private String shippingStatus;
    private String shippingAddress;
}

