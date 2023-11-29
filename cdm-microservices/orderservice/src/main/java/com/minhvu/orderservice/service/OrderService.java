package com.minhvu.orderservice.service;


import com.minhvu.orderservice.dto.CreateOrderRequest;
import com.minhvu.orderservice.model.Order;

import java.util.List;

public interface OrderService {

    List<Order> viewAll();

    List<Order> findByShippingStatus(String shippingStatus);
    List<Order> findByPaymentStatus(String shippingStatus);

    void createOrder(CreateOrderRequest createOrderRequest);
    Order findById(Long id);

    List<Order> findByUserId(String id);

    //    Order createOrderFromCartItems(List<Product> cartItems, User user);
    void saveOrder(Order order);
}
