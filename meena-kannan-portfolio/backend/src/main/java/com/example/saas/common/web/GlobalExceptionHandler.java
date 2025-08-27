package com.example.saas.common.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.OffsetDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleValidation(MethodArgumentNotValidException ex) {
		Map<String, Object> body = new HashMap<>();
		body.put("timestamp", OffsetDateTime.now().toString());
		body.put("status", 400);
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getFieldErrors().forEach(e -> errors.put(e.getField(), e.getDefaultMessage()));
		body.put("errors", errors);
		return ResponseEntity.badRequest().body(body);
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<?> handleIllegalArgument(IllegalArgumentException ex) {
		return error(HttpStatus.BAD_REQUEST, ex.getMessage());
	}

	@ExceptionHandler(SecurityException.class)
	public ResponseEntity<?> handleSecurity(SecurityException ex) {
		return error(HttpStatus.FORBIDDEN, ex.getMessage());
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleAny(Exception ex) {
		return error(HttpStatus.INTERNAL_SERVER_ERROR, "Unexpected error");
	}

	private ResponseEntity<Map<String, Object>> error(HttpStatus status, String message) {
		Map<String, Object> body = new HashMap<>();
		body.put("timestamp", OffsetDateTime.now().toString());
		body.put("status", status.value());
		body.put("error", message);
		return ResponseEntity.status(status).body(body);
	}
}