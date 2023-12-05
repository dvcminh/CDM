package com.minhvu.orderservice.service;

import com.minhvu.orderservice.dto.CreateOrderItemRequest;
import com.minhvu.orderservice.dto.CreateOrderRequest;
import com.minhvu.orderservice.external.InventoryService;
import com.minhvu.orderservice.model.Order;
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
    private final OrderService orderService;

    @Override
    public List<OrderItem> findByOrderId(String orderId) {
        return orderItemRepository.findByOrderId(orderId);
    }

//    @Override
//    public OrderItem createOrderItem(CreateOrderItemRequest createOrderItemRequest) {
//        Order order = orderService.findById(createOrderItemRequest.getOrderItemPK().getOrderId());
//
//        OrderItem orderItem = OrderItem.builder()
//                .id(createOrderItemRequest.getOrderItemPK())
//                .quantity(createOrderItemRequest.getQuantity())
//                .pricePerUnit(createOrderItemRequest.getPricePerUnit())
//                .size(createOrderItemRequest.getSize())
//                .color(createOrderItemRequest.getColor())
//                .voucherValue(createOrderItemRequest.getVoucher())
//                .shippingValue(createOrderItemRequest.getShipping())
//                .build();
//
//        inventoryService.reduceQuantity(orderItem.getId().getProductId(), orderItem.getQuantity());
//
//        return orderItemRepository.save(orderItem);
//    }


}
