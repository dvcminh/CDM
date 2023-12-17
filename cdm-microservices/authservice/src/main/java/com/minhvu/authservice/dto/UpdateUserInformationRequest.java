package com.minhvu.authservice.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UpdateUserInformationRequest {
    private String id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String avatar;
}
