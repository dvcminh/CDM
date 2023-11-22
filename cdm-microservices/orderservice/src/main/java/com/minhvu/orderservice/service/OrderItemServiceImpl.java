package com.minhvu.orderservice.service;

import com.minhvu.orderservice.external.InventoryService;
import com.minhvu.orderservice.model.OrderItem;
import com.minhvu.orderservice.repository.OrderItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Log4j2
@RequiredArgsConstructor
public class OrderItemServiceImpl implements OrderItemService{
    private final OrderItemRepository orderItemRepository;
    private final InventoryService inventoryService;

    @Override
    public OrderItem createOrderItem(OrderItem orderItem) {
        inventoryService.reduceQuantity(orderItem.getProductId(), orderItem.getQuantity());

        return orderItemRepository.save(orderItem);
    }

    @Override
    public List<OrderItem> findByOrderId(Long id) {
        return orderItemRepository.findByOrderId(id);
    }
}
