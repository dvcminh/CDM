package com.minhvu.authservice.dto;

import lombok.Data;

@Data
public class UpdateUserInformationRequest {
    private Integer id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String avatar;
}
