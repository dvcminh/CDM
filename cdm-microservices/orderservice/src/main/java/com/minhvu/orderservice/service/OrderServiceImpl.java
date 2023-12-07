package com.minhvu.orderservice.service;

import com.minhvu.orderservice.dto.CreateOrderItemRequest;
import com.minhvu.orderservice.dto.CreateOrderRequest;
import com.minhvu.orderservice.dto.UpdateOrderRequest;
import com.minhvu.orderservice.external.InventoryService;
import com.minhvu.orderservice.model.Order;
import com.minhvu.orderservice.model.OrderItem;
import com.minhvu.orderservice.model.OrderItemPK;
import com.minhvu.orderservice.model.Status;
import com.minhvu.orderservice.repository.OrderItemRepository;
import com.minhvu.orderservice.repository.OrderRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final InventoryService inventoryService;
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
    @Transactional
    public void createOrder(CreateOrderRequest createOrderRequest) {
        Order order = new Order();
        order.setUserId(createOrderRequest.getUserId());
        order.setOrderDate(LocalDateTime.now());
        order.setPaymentStatus("Pending");
        order.setShippingStatus("Pending");
        order.setVoucherValue(createOrderRequest.getVoucherValue());
        order.setShippingValue(createOrderRequest.getShippingValue());
        order.setShippingAddress(createOrderRequest.getShippingAddress());
        order.setTotalAmount(createOrderRequest.getTotalAmount());

        orderRepository.save(order);

        for (CreateOrderItemRequest createOrderItemRequestList : createOrderRequest.getCreateOrderItemRequestList()) {
            inventoryService.reduceQuantity(createOrderItemRequestList.getProductId(), createOrderItemRequestList.getQuantity());

            OrderItemPK orderItemPK = OrderItemPK.builder()
                    .orderId(order.getId())
                    .productId(createOrderItemRequestList.getProductId())
                    .build();

            OrderItem orderItem = OrderItem.builder()
                    .id(orderItemPK)
                    .quantity(createOrderItemRequestList.getQuantity())
                    .pricePerUnit(createOrderItemRequestList.getPricePerUnit())
                    .size(createOrderItemRequestList.getSize())
                    .color(createOrderItemRequestList.getColor())
                    .voucherValue(createOrderItemRequestList.getVoucher())
                    .shippingValue(createOrderItemRequestList.getShipping())
                    .build();

            orderItemRepository.save(orderItem);
        }

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

    @Override
    public Order updateOrder(UpdateOrderRequest order) {
        Order order1 = orderRepository.findById(order.getId()).orElse(null);
        if (order1 == null) throw new RuntimeException("Order not found");
        order1.setShippingStatus(String.valueOf(order.getShippingStatus()));
        order1.setPaymentStatus(String.valueOf(order.getPaymentStatus()));
        orderRepository.save(order1);
        return order1;
    }
}
