package com.minhvu.orderservice.service;


import com.minhvu.orderservice.dto.CreateOrderItemRequest;
import com.minhvu.orderservice.dto.CreateOrderRequest;
import com.minhvu.orderservice.model.OrderItem;

import java.util.List;

public interface OrderItemService {
    List<OrderItem> findByOrderId(String orderId);
//    OrderItem createOrderItem(CreateOrderItemRequest createOrderItemRequest);
}
