package com.minhvu.productservice.service;

import com.minhvu.productservice.dto.CreateShopRequest;
import com.minhvu.productservice.dto.UpdateShopRequest;
import com.minhvu.productservice.model.Shop;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ShopService {
    Page<Shop> findAll(Pageable pageable);
    Shop getProductById(String id);

    Shop createProduct(CreateShopRequest createShopRequest);

    Shop updateProduct(UpdateShopRequest updateShopRequest);

    void deleteProduct(String id);
    List<Shop> findShopsByNameOrderedByPriceDesc(String name, boolean isAsc);
}
