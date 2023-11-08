package com.minhvu.inventoryservice.repository;

import com.minhvu.inventoryservice.model.Inventory;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findBySkuCodeIn(List<String> skuCode);
    List<Inventory> findAll();
    Inventory findBySkuCode(String skuCode);
}
