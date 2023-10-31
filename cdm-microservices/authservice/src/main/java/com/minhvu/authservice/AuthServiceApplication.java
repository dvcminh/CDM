package com.minhvu.authservice;


import com.minhvu.authservice.auth.AuthenticationService;
import com.minhvu.authservice.auth.RegisterRequest;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import static com.minhvu.authservice.user.Role.ADMIN;
import static com.minhvu.authservice.user.Role.MANAGER;

@SpringBootApplication
@EnableDiscoveryClient
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class AuthServiceApplication {
    public static void main(String[] args) {
        org.springframework.boot.SpringApplication.run(AuthServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(
            AuthenticationService service
    ) {
        return args -> {
            var admin = RegisterRequest.builder()
                    .firstname("Admin")
                    .lastname("Admin")
                    .email("admin@mail.com")
                    .password("password")
                    .role(ADMIN)
                    .build();
            System.out.println("Admin token: " + service.register(admin).getAccessToken());

            var manager = RegisterRequest.builder()
                    .firstname("Admin")
                    .lastname("Admin")
                    .email("manager@mail.com")
                    .password("password")
                    .role(MANAGER)
                    .build();
            System.out.println("Manager token: " + service.register(manager).getAccessToken());

        };
    }
}
