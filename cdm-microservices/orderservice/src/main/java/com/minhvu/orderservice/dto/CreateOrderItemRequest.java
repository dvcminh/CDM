package com.minhvu.orderservice.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class CreateOrderItemRequest {
    private String productId;
    private long orderId;
    private int quantity;
    private BigDecimal pricePerUnit;
    private String size;
    private String color;
    private int voucher;
    private int shipping;
}
