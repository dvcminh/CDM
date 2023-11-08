package com.minhvu.inventoryservice.service;

import com.minhvu.inventoryservice.dto.InventoryRequest;
import com.minhvu.inventoryservice.dto.InventoryResponse;
import com.minhvu.inventoryservice.model.Inventory;
import com.minhvu.inventoryservice.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class InventoryServiceImpl implements InventoryService{

    private final InventoryRepository inventoryRepository;

    @Transactional(readOnly = true)
    @SneakyThrows
    public List<InventoryResponse> isInStock(List<String> skuCode) {
        log.info("Checking Inventory");
        return inventoryRepository.findBySkuCodeIn(skuCode).stream()
                .map(inventory ->
                        InventoryResponse.builder()
                                .skuCode(inventory.getSkuCode())
                                .isInStock(inventory.getQuantity() > 0)
                                .build()
                ).toList();
    }

    @Override
    public List<Inventory> findALl() {
        return inventoryRepository.findAll();
    }

    @Override
    public String create(InventoryRequest inventory) {
        Inventory newInventory = Inventory.builder()
                .skuCode(inventory.getSkuCode())
                .quantity(inventory.getQuantity())
                .build();
        inventoryRepository.save(newInventory);
        return "Create success";
    }

    @Override
    public String update(InventoryRequest inventory) {
        Inventory newInventory = inventoryRepository.findBySkuCode(inventory.getSkuCode());
        newInventory.setQuantity(inventory.getQuantity());
        inventoryRepository.save(newInventory);
        return "Update success";
    }

    @Override
    public String delete(InventoryRequest inventory) {
        Inventory inventory1 = inventoryRepository.findBySkuCode(inventory.getSkuCode());
        inventoryRepository.delete(inventory1);
        return "Delete success";
    }
}
