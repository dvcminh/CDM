package com.registryservice;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class RegistryServiceApplication {

        public static void main(String[] args) {
            org.springframework.boot.SpringApplication.run(RegistryServiceApplication.class, args);
        }
}
