package com.example.saas.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.UUID;

@Component
public class TenantFilter extends OncePerRequestFilter {
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
			String header = request.getHeader("X-Tenant-Id");
			if (header != null && !header.isBlank()) {
				try {
					TenantContext.setTenantId(UUID.fromString(header.trim()));
				} catch (IllegalArgumentException ex) {
					response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid X-Tenant-Id");
					return;
				}
			}
			filterChain.doFilter(request, response);
		} finally {
			TenantContext.clear();
		}
	}
}