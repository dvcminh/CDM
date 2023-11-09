package com.minhvu.inventoryservice.service;

import com.minhvu.inventoryservice.dto.InventoryRequest;
import com.minhvu.inventoryservice.dto.InventoryResponse;
import com.minhvu.inventoryservice.model.Inventory;

import java.util.List;

public interface InventoryService {
    List<InventoryResponse> isInStock(List<String> skuCode);
    List<Inventory> findALl();
    String create(InventoryRequest inventory);
    Inventory update(Inventory inventory);
    String delete(Inventory inventory);
    Inventory findById(Long id);
}
