package com.minhvu.orderservice.dto;

import lombok.Data;

@Data
public class UpdateOrderRequest {
    private Long id;
    private String shippingStatus;
    private String paymentStatus;
}
