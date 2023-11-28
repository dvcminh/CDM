package com.minhvu.productservice;


import com.minhvu.productservice.model.Product;
import com.minhvu.productservice.model.Status;
import com.minhvu.productservice.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class ProductServiceApplication {
    public static void main(String[] args) {
        org.springframework.boot.SpringApplication.run(ProductServiceApplication.class, args);
    }
    @Bean
    public CommandLineRunner runner(ProductRepository productRepository) {
        return args -> {
            var product1 = Product.builder()
                    .name("Dual Motor All-Wheel Drive")
                    .type("Model S")
                    .description("Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions.")
                    .price(java.math.BigDecimal.valueOf(69990))
                    .category("Cars")
                    .image_url("a")
                    .status(Status.AVAILABLE)
                    .build();
            productRepository.save(product1);
            var product2 = Product.builder()
                    .name("iPhone 12 Pro")
                    .description("Apple iPhone 12 Pro smartphone runs on iOS v14 operating system. The phone is powered by Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz, Quad core, Thunder) processor. It runs on the Apple A14 Bionic Chipset. It has 6 GB RAM and 128 GB internal storage.")
                    .price(java.math.BigDecimal.valueOf(999))
                    .category("SmartphoneVIP")
                    .build();
            productRepository.save(product1);
        };
    }
}
