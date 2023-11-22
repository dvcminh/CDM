package com.minhvu.orderservice.controller;

import com.minhvu.orderservice.dto.CreateOrderItemRequest;
import com.minhvu.orderservice.dto.CreateOrderRequest;
import com.minhvu.orderservice.model.Order;
import com.minhvu.orderservice.model.OrderItem;
import com.minhvu.orderservice.service.OrderItemService;
import com.minhvu.orderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/orders")
public class OrderController {
    private final OrderService orderService;
    private final OrderItemService orderItemService;

    @PostMapping("/create_order")
    public Long checkout(@RequestBody CreateOrderRequest createOrderRequest) {

        Order order = new Order();
        order.setUserId(createOrderRequest.getUserId());
        order.setOrderDate(LocalDateTime.now());
        order.setPaymentStatus("Pending");
        order.setShippingStatus("Pending");
        order.setVoucherValue(createOrderRequest.getVoucherValue());
        order.setShippingValue(createOrderRequest.getShippingValue());
        order.setShippingAddress(createOrderRequest.getShippingAddress());
        order.setTotalAmount(createOrderRequest.getTotalAmount());

        orderService.createOrder(order);

        return order.getId();
    }

    @GetMapping("/countOrders")
    public ResponseEntity<Integer> countProducts() {
        return ResponseEntity.ok(orderService.viewAll().size());
    }

    @PostMapping("/createItem")
    public ResponseEntity<String> createOrderItem(@RequestBody CreateOrderItemRequest createOrderItemRequest) {

        Order order = orderService.findById(createOrderItemRequest.getOrderId());

        OrderItem orderItem = OrderItem.builder()
                .order(order)
                .productId(createOrderItemRequest.getProductId())
                .quantity(createOrderItemRequest.getQuantity())
                .pricePerUnit(createOrderItemRequest.getPricePerUnit())
                .size(createOrderItemRequest.getSize())
                .color(createOrderItemRequest.getColor())
                .voucherValue(createOrderItemRequest.getVoucher())
                .shippingValue(createOrderItemRequest.getShipping())
                .build();

        orderItemService.createOrderItem(orderItem);

        return ResponseEntity.ok("Thành công!");
        // Gọi service để tạo đơn hàng mới và lưu các mục trong giỏ hàng
//        Order order = orderService.createOrderFromCartItems(cartItems, user);

        // Trả về thông báo thành công hoặc thất bại
//        if (order != null) {
//            return ResponseEntity.ok("Đơn hàng đã được tạo thành công.");
//        } else {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi khi tạo đơn hàng.");
//        }
//        return null;
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
