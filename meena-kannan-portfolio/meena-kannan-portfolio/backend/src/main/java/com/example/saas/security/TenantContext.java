package com.example.saas.security;

import java.util.UUID;

public final class TenantContext {
	private static final ThreadLocal<UUID> TENANT_ID = new ThreadLocal<>();

	private TenantContext() {}

	public static void setTenantId(UUID tenantId) {
		TENANT_ID.set(tenantId);
	}

	public static UUID getTenantId() {
		return TENANT_ID.get();
	}

	public static UUID requireTenantId() {
		UUID id = TENANT_ID.get();
		if (id == null) {
			throw new IllegalArgumentException("Missing X-Tenant-Id header");
		}
		return id;
	}

	public static void clear() {
		TENANT_ID.remove();
	}
}