package com.minhvu.inventoryservice.controller;

import com.minhvu.inventoryservice.dto.InventoryRequest;
import com.minhvu.inventoryservice.dto.InventoryResponse;
import com.minhvu.inventoryservice.dto.ProductResponse;
import com.minhvu.inventoryservice.external.client.ProductService;
import com.minhvu.inventoryservice.model.Inventory;
import com.minhvu.inventoryservice.service.InventoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/v1/inventory")
@RequiredArgsConstructor
@Slf4j
public class InventoryController {

    private final InventoryService inventoryService;

    // http://localhost:8082/api/inventory/iphone-13,iphone13-red

    // http://localhost:8082/api/inventory?skuCode=iphone-13&skuCode=iphone13-red
    @GetMapping("getInventory")
    public Page<Inventory> findALl() {
        log.info("Find all inventory");
        return inventoryService.findAll();
    }

    @GetMapping("getProducts")
    public List<ProductResponse> getProducts() {
        log.info("Find all inventory");
        return inventoryService.getProducts();
    }

    @GetMapping("findBySkuCode")
    public Inventory findBySkuCode(@RequestParam String skuCode) {
        log.info("Find inventory by skuCode");
        return inventoryService.findBySkuCodeContainsAllIgnoreCase(skuCode).orElseThrow();
    }

    @PostMapping("addInventory")
    public String create(@RequestBody InventoryRequest inventory) {
        log.info("Create inventory");
        return inventoryService.create(inventory);
    }

    @PutMapping("updateInventory/{id}")
    public Inventory update(@PathVariable Long id, @RequestBody InventoryRequest inventoryRequest) {
        Inventory inventory = inventoryService.findById(id);
        inventory.setQuantity(inventoryRequest.getQuantity());
        inventory.setSkuCode(inventoryRequest.getSkuCode());
        log.info("Update inventory");
        return inventoryService.update(inventory);
    }

    @DeleteMapping("deleteInventory/{id}")
    public String delete(@PathVariable Long id) {
        Inventory inventory = inventoryService.findById(id);
        log.info("Delete inventory");
        return inventoryService.delete(inventory);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<InventoryResponse> isInStock(@RequestParam List<String> skuCode) {
        log.info("Received inventory check request for skuCode: {}", skuCode);
        return inventoryService.isInStock(skuCode);
    }

    @PutMapping("/reduceQuantity/{id}")
    public ResponseEntity<Void> reduceQuantity(
            @PathVariable("id") long productId,
            @RequestParam long quantity
    ) {

        log.info("ProductController | reduceQuantity is called");

        log.info("ProductController | reduceQuantity | productId : " + productId);
        log.info("ProductController | reduceQuantity | quantity : " + quantity);

        inventoryService.reduceQuantity(productId,quantity);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

