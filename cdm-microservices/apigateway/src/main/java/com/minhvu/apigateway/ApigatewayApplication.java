package com.minhvu.apigateway;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ApigatewayApplication {

        public static void main(String[] args) {
            org.springframework.boot.SpringApplication.run(ApigatewayApplication.class, args);
        }
}
