package com.minhvu.orderservice.controller;

import com.minhvu.orderservice.model.Order;
import com.minhvu.orderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    @PostMapping("/create_order")
    public Long checkout(@RequestParam("totalAmount") BigDecimal totalAmount,
                         @RequestParam("userId") String id,
                         @RequestParam("shippingAddress") String address,
                         @RequestParam("firstName") String firstName,
                         @RequestParam("lastName") String lastName,
                         @RequestParam("email") String email,
                         @RequestParam("phoneNumber") String phone) {

        Order order = new Order();
        order.setUserId(id);
        order.setOrderDate(LocalDateTime.now());
        order.setPaymentStatus("Pending");
        order.setShippingStatus("Pending");
        order.setShippingAddress(address);
        order.setTotalAmount(totalAmount);

        orderService.createOrder(order);

        return order.getId();
    }

    @GetMapping("/countOrders")
    public ResponseEntity<Integer> countProducts() {
        return ResponseEntity.ok(orderService.viewAll().size());
    }

//    @GetMapping("/getOrders")
//    public ResponseEntity<List<Order>> findOrdersByUserId(@RequestParam("userId") int id,
//                                                   @RequestParam("shippingAddress") String address,
//                                                   @RequestParam("firstName") String firstName,
//                                                   @RequestParam("lastName") String lastName,
//                                                   @RequestParam("email") String email,
//                                                   @RequestParam("phoneNumber") String phone) {
//        User user = new User(id,email,firstName,lastName,phone,address);
//
//        List<Order> orders = orderService.getOrdersByUser(user);
//        return ResponseEntity.ok(orders);
//    }
}
