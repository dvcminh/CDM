package com.minhvu.authservice.dto;

import com.minhvu.authservice.entity.Role;

public record UserDto(Integer id,
                      String email,
                      String username,
                      String phoneNumber,
                      String address,
                      String avatar,
                      Role role) {
}
