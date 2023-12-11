package com.minhvu.authservice.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ChangePasswordRequest {
    private String id;
    private String currentPassword;
    private String newPassword;
    private String confirmationPassword;
}
