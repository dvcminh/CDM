package com.minhvu.orderservice.service;

import com.minhvu.orderservice.dto.CreateOrderRequest;
import com.minhvu.orderservice.external.InventoryService;
import com.minhvu.orderservice.model.Order;
import com.minhvu.orderservice.repository.OrderItemRepository;
import com.minhvu.orderservice.repository.OrderRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{
    private final OrderRepository orderRepository;
    private EntityManager entityManager;

    @Override
    public List<Order> findAllOrdersSortedByDateDescending() {
        String jpql = "SELECT o FROM Order o ORDER BY o.orderDate DESC";
        TypedQuery<Order> query = entityManager.createQuery(jpql, Order.class);
        return query.getResultList();
    }

    @Override
    public List<Order> viewAll() {
        return orderRepository.findAllByOrderByOrderDateDesc();
    }

    @Override
    public List<Order> findByShippingStatus(String shippingStatus) {
        return orderRepository.findByShippingStatus(shippingStatus);
    }

    @Override
    public List<Order> findByPaymentStatus(String shippingStatus) {
        return orderRepository.findByPaymentStatus(shippingStatus);
    }

    @Override
    public void createOrder(Order order) {


        orderRepository.save(order);
    }

    @Override
    public Order findById(Long id) {
        return orderRepository.findById(id).get();
    }

    @Override
    public List<Order> findByUserId(String id) {
        return orderRepository.findByUserId(id);
    }


    @Override
    public void saveOrder(Order order) {
        orderRepository.save(order);
    }
}
