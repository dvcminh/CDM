package com.minhvu.productservice;


import com.minhvu.productservice.model.Car;
import com.minhvu.productservice.model.Energy;
import com.minhvu.productservice.model.Shop;
import com.minhvu.productservice.model.Status;
import com.minhvu.productservice.repository.CarRepository;
import com.minhvu.productservice.repository.EnergyRepository;
import com.minhvu.productservice.repository.ShopRepository;
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
    public CommandLineRunner runner(CarRepository carRepository, EnergyRepository energyRepository, ShopRepository shopRepository) {
        return args -> {
            var car = Car.builder()
                    .name("Dual Motor All-Wheel Drive")
                    .model("Model S")
                    .description("Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions.")
                    .price(java.math.BigDecimal.valueOf(69990))
                    .status(Status.AVAILABLE)
                    .build();
            carRepository.save(car);
            var energy = Energy.builder()
                    .name("Solar Panels")
                    .description("Lowest Cost Solar Panels in America")
                    .price(java.math.BigDecimal.valueOf(7990))
                    .status(Status.UNAVAILABLE)
                    .build();
            energyRepository.save(energy);
            var shop = Shop.builder()
                    .name("Cybertruck for kid")
                    .description("Cybertruck for kid")
                    .price(java.math.BigDecimal.valueOf(7990))
                    .status(Status.UNAVAILABLE)
                    .type("Lifestyle")
                    .build();
            shopRepository.save(shop);
        };
    }
}
