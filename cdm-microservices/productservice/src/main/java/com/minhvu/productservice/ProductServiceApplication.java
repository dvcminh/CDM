package com.minhvu.productservice;


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
            var product1 = com.minhvu.productservice.model.Product.builder()
                    .name("iPhone 12")
                    .description("Apple iPhone 12 smartphone runs on iOS v14 operating system. The phone is powered by Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz, Quad core, Thunder) processor. It runs on the Apple A14 Bionic Chipset. It has 4 GB RAM and 64 GB internal storage.")
                    .price(java.math.BigDecimal.valueOf(799))
                    .build();
            productRepository.save(product1);
            var product2 = com.minhvu.productservice.model.Product.builder()
                    .name("iPhone 12 Pro")
                    .description("Apple iPhone 12 Pro smartphone runs on iOS v14 operating system. The phone is powered by Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz, Quad core, Thunder) processor. It runs on the Apple A14 Bionic Chipset. It has 6 GB RAM and 128 GB internal storage.")
                    .price(java.math.BigDecimal.valueOf(999))
                    .build();
            productRepository.save(product2);
        };
    }
}
