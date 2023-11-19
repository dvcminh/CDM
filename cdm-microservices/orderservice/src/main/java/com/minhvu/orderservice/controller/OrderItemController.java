package com.minhvu.orderservice.controller;

import com.minhvu.orderservice.model.Order;
import com.minhvu.orderservice.model.OrderItem;
import com.minhvu.orderservice.service.OrderItemService;
import com.minhvu.orderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/order_items")
public class OrderItemController {
    private final OrderItemService orderItemService;
    private final OrderService orderService;

    @PostMapping("/createItem")
    public ResponseEntity<String> createOrderItem(@RequestParam("productId") String productId,
                                                  @RequestParam("orderId") long orderId,
                                                  @RequestParam("quantity") int quantity,
                                                  @RequestParam("pricePerUnit") BigDecimal pricePerUnit,
                                                  @RequestParam("size") String size,
                                                  @RequestParam("color") String color,
                                                  @RequestParam("voucher") int voucher,
                                                  @RequestParam("shipping") int shipping) {

        Order order = orderService.findById(orderId);

        OrderItem orderItem = OrderItem.builder()
                .order(order)
                .productId(productId)
                .quantity(quantity)
                .pricePerUnit(pricePerUnit)
                .size(size)
                .color(color)
                .voucherValue(voucher)
                .shippingValue(shipping)
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
}
