package com.minhvu.productservice.service;

import com.cloudinary.Cloudinary;
import com.minhvu.productservice.config.CloudinaryConfig;
import com.minhvu.productservice.dto.CreateProductRequest;
import com.minhvu.productservice.model.Product;
import com.minhvu.productservice.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final Cloudinary cloudinary;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(String id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Product createProduct(String name, MultipartFile imageFile, BigDecimal price, String description, String category) throws IOException {
        String imageUrl = uploadProductImage(imageFile);

        return Product.builder()
                .name(name)
                .image_url(imageUrl)
                .price(price)
                .description(description)
                .category(category)
                .build();
    }

    @Override
    public Product updateProduct(String id, String name, MultipartFile imageFile, BigDecimal price, String description, String category) {
        Product product = productRepository.findById(id).orElse(null);
        product.setName(name);
        product.setPrice(price);
        product.setDescription(description);
        product.setCategory(category);
        return productRepository.save(product);

    }
    @Override
    public List<Product> findProductByCategoryIgnoreCase(String category) {
        return productRepository.findAllByCategoryIgnoreCase(category);
    }
    @Override
    public List<Product> findProductByNameContainsAndCategory(String name, String category) {
        return productRepository.findByNameContainsAndCategoryAllIgnoreCase(name, category, Sort.by(Sort.Direction.ASC, "name"));
    }
    public String uploadProductImage(MultipartFile imageFile) throws IOException {
        Map<String, String> params = new HashMap<>();
        params.put("folder", "product_images");

        Map<?, ?> uploadResult = cloudinary.uploader().upload(imageFile.getBytes(), params);

        return uploadResult.get("secure_url").toString();
    }
}
