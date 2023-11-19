package com.minhvu.orderservice.service;


import com.minhvu.orderservice.model.OrderItem;

import java.util.List;

public interface OrderItemService {
    OrderItem createOrderItem(OrderItem orderItem);
    List<OrderItem> findByOrderId(Long id);
}
