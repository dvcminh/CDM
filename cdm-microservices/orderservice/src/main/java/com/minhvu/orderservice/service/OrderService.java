package com.minhvu.orderservice.service;

import com.minhvu.orderservice.model.Order;
import com.minhvu.orderservice.model.OrderItem;
import com.minhvu.orderservice.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(String paymentStatus, String shippingStatus, String shippingAddress, BigDecimal totalAmount) {
        Order order = Order.builder()
                .orderDate(LocalDateTime.now())
                .paymentStatus(paymentStatus)
                .shippingStatus(shippingStatus)
                .shippingAddress(shippingAddress)
                .totalAmount(totalAmount)
                .build();

        return orderRepository.save(order);
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order updateOrder(Order order) {
        return orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    public Order addOrderItem(Long orderId, OrderItem orderItem) {
        Order order = getOrderById(orderId).orElseThrow(() -> new RuntimeException("Order not found"));
        order.getOrderItems().add(orderItem);
        return updateOrder(order);
    }

    public Order removeOrderItem(Long orderId, OrderItem orderItem) {
        Order order = getOrderById(orderId).orElseThrow(() -> new RuntimeException("Order not found"));
        order.getOrderItems().remove(orderItem);
        return updateOrder(order);
    }
}