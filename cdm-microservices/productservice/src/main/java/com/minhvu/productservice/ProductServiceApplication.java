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
                    .category("Smartphone")
                    .build();
            productRepository.save(product1);
            var product2 = com.minhvu.productservice.model.Product.builder()
                    .name("iPhone 12 Pro")
                    .description("Apple iPhone 12 Pro smartphone runs on iOS v14 operating system. The phone is powered by Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz, Quad core, Thunder) processor. It runs on the Apple A14 Bionic Chipset. It has 6 GB RAM and 128 GB internal storage.")
                    .price(java.math.BigDecimal.valueOf(999))
                    .category("SmartphoneVIP")
                    .build();
            productRepository.save(product2);
            var product3 = com.minhvu.productservice.model.Product.builder()
                    .name("iPhone 10")
                    .description("Apple iPhone 10 Pro smartphone runs on iOS v14 operating system. The phone is powered by Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz, Quad core, Thunder) processor. It runs on the Apple A14 Bionic Chipset. It has 6 GB RAM and 128 GB internal storage.")
                    .price(java.math.BigDecimal.valueOf(999))
                    .category("SmartphoneVIP")
                    .build();
            productRepository.save(product3);
            var product4 = com.minhvu.productservice.model.Product.builder()
                    .name("iPhone 8")
                    .description("Apple iPhone 8 Pro smartphone runs on iOS v14 operating system. The phone is powered by Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz, Quad core, Thunder) processor. It runs on the Apple A14 Bionic Chipset. It has 6 GB RAM and 128 GB internal storage.")
                    .price(java.math.BigDecimal.valueOf(999))
                    .category("SmartphoneVIP")
                    .build();
            productRepository.save(product4);
            var product5 = com.minhvu.productservice.model.Product.builder()
                    .name("iPhone 15")
                    .description("Apple iPhone 15 Pro smartphone runs on iOS v14 operating system. The phone is powered by Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz, Quad core, Thunder) processor. It runs on the Apple A14 Bionic Chipset. It has 6 GB RAM and 128 GB internal storage.")
                    .price(java.math.BigDecimal.valueOf(999))
                    .category("SmartphoneVIP")
                    .build();
            productRepository.save(product5);
        };
    }
}
