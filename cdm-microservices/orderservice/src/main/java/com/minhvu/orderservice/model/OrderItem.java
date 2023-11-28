package com.minhvu.orderservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "order_items")
public class OrderItem {

    @EmbeddedId
    private OrderItemPK id;

    private Integer quantity;
    private BigDecimal pricePerUnit;
    private Integer voucherValue;
    private Integer shippingValue;
    private String size;
    private String color;
}

