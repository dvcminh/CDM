package com.minhvu.orderservice.repository;

import com.minhvu.orderservice.model.OrderItem;
import com.minhvu.orderservice.model.OrderItemPK;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, OrderItemPK> {
    Page<OrderItem> findById_OrderIdAllIgnoreCase(Long orderId, Pageable pageable);


    // Additional custom query methods can be added here
}

