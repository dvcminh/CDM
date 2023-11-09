package com.minhvu.inventoryservice.service;

import com.minhvu.inventoryservice.dto.InventoryRequest;
import com.minhvu.inventoryservice.dto.InventoryResponse;
import com.minhvu.inventoryservice.model.Inventory;
import com.minhvu.inventoryservice.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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
    public Page<Inventory> findAll() {
        return inventoryRepository.findAll(Pageable.ofSize(1));
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
    public Inventory update(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @Override
    public String delete(Inventory inventory) {
        inventoryRepository.delete(inventory);
        return "Delete success";
    }

    @Override
    public Inventory findById(Long id) {
        return inventoryRepository.findById(id).orElseThrow();
    }

    @Override
    public Optional<Inventory> findBySkuCodeContainsAllIgnoreCase(String skuCode) {
        return inventoryRepository.findBySkuCodeContainsAllIgnoreCase(skuCode);
    }
}
