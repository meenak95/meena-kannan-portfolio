package com.example.saas.core.domain;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {
	@Id
	@Column(nullable = false)
	private UUID id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false, unique = true)
	private String email;

	@Column(name = "password_hash", nullable = false)
	private String passwordHash;

	@Column(nullable = false)
	private String roles; // comma-separated

	@Column(name = "tenant_id", nullable = false)
	private UUID tenantId;

	@Column(nullable = false)
	private boolean active = true;

	@Column(name = "email_verified", nullable = false)
	private boolean emailVerified = false;

	@Column(name = "created_at", nullable = false)
	private OffsetDateTime createdAt;

	public User() {}

	public static User of(String name, String email, String passwordHash, UUID tenantId, String roles) {
		User u = new User();
		u.id = UUID.randomUUID();
		u.name = name;
		u.email = email;
		u.passwordHash = passwordHash;
		u.roles = roles;
		u.tenantId = tenantId;
		u.active = true;
		u.emailVerified = false;
		u.createdAt = OffsetDateTime.now();
		return u;
	}

	public UUID getId() { return id; }
	public String getName() { return name; }
	public String getEmail() { return email; }
	public String getPasswordHash() { return passwordHash; }
	public String getRoles() { return roles; }
	public UUID getTenantId() { return tenantId; }
	public boolean isActive() { return active; }
	public boolean isEmailVerified() { return emailVerified; }
	public OffsetDateTime getCreatedAt() { return createdAt; }

	public void setName(String name) { this.name = name; }
	public void setRoles(String roles) { this.roles = roles; }
	public void setActive(boolean active) { this.active = active; }
	public void setEmailVerified(boolean emailVerified) { this.emailVerified = emailVerified; }
}