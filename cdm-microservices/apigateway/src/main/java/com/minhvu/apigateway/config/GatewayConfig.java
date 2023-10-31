package com.minhvu.apigateway.config;

import com.minhvu.apigateway.filter.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class GatewayConfig {

    private final JwtAuthenticationFilter filter;

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes().route("AUTH-SERVICE", r -> r.path("api/v1/auth/**").filters(f -> f.filter(filter)).uri("lb://AUTH-SERVICE"))
                .build();
    }
}