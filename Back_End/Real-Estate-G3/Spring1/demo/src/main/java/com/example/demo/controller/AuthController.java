package com.example.demo.controller;

import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.LoginRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.LoginResponse;
import com.example.demo.service.AuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Endpoints for user authentication")
public class AuthController {

    private final AuthService authService;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/api/auth/register")
    @Operation(summary = "Register a new user", description = "Allows users to register by providing necessary registration details.")
    public ResponseEntity<Map<String, Object>> register(
            @Parameter(description = "Registration details of the user") @RequestBody RegisterRequest registerRequest) {

        Map<String, Object> response = new HashMap<>();
        try {
            authService.register(registerRequest);
            response.put("success", true);
            response.put("message", "User registered successfully");
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Registration failed: " + e.getMessage());
        }

        return new ResponseEntity<>(response, OK);
    }

    // @CrossOrigin(origins = "http://localhost:5173")
    // @PostMapping("/api/auth/login")
    // @Operation(summary = "Authenticate user", description = "Allows users to authenticate by providing valid login credentials.")
    // public ResponseEntity<Map<String, Object>> login(
    //         @Parameter(description = "Login credentials of the user") @RequestBody LoginRequest loginRequest) {

    //     Map<String, Object> response = new HashMap<>();
    //     try {
    //            LoginResponse loginResponse = authService.login(loginRequest);

    //         if (loginResponse.isSuccess()) {
    //             response.put("success", true);
    //             response.put("message", "Login successful");
    //         } else {
    //             response.put("success", false);
    //             response.put("message", "Invalid email or password");
    //         }
    //     } catch (Exception e) {
    //         response.put("success", false);
    //         response.put("message", "Login failed: " + e.getMessage());
    //     }

    //     return new ResponseEntity<>(response, OK);
    // }
}
