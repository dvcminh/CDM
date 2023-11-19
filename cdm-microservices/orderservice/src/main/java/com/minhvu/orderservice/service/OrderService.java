package com.minhvu.orderservice.service;


import com.minhvu.orderservice.model.Order;

import java.math.BigDecimal;
import java.util.List;

public interface OrderService {
    List<Order> findAllOrdersSortedByDateDescending();

    List<Order> viewAll();

    List<Order> findByShippingStatus(String shippingStatus);
    List<Order> findByPaymentStatus(String shippingStatus);

    Order createOrder(Order order);
    Order findById(Long id);

    List<Order> findByUserId(String id);

    //    Order createOrderFromCartItems(List<Product> cartItems, User user);
    void saveOrder(Order order);
}
