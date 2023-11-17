package com.minhvu.apigateway.filter;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;

@Component
public class RouteValidator {

    public static final List<String> openApiEndpoints = List.of(
            "/auth/register",
            "/auth/login",

            "/api/v1/products/getAllProducts",
            "/api/v1/products/getProductById",
            "/api/v1/products/getProductByCategory",
            "/api/v1/products/getProductByNameAndCategory",

            "/api/v1/energy/getAllEnergy",
            "/api/v1/energy/getEnergyById",
            "/api/v1/energy/getAllEnergy",

            "/eureka"
    );

    public Predicate<ServerHttpRequest> isSecured =
            request -> openApiEndpoints
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().contains(uri));

}
