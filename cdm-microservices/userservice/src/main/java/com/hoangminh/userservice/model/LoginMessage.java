package com.hoangminh.userservice.model;
public class LoginMessage {

    public LoginMessage(String message, String id, String role, Boolean status) {
        this.message = message;
        this.id = id;
        this.role = role;
        this.status = status;
    }
    public LoginMessage(){}
    String message;

    String id;
    String role;
    Boolean status;
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }


}
