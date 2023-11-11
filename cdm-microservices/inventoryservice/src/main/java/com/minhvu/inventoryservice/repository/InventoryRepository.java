package com.minhvu.inventoryservice.repository;

import com.minhvu.inventoryservice.model.Inventory;
import lombok.NonNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findBySkuCodeIn(List<String> skuCode);
    Optional<Inventory> findBySkuCodeContainsAllIgnoreCase(String skuCode);

    Page<Inventory> findAll(Pageable pageable);
}
