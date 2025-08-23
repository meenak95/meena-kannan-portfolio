package com.example.saas.core.domain;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "refresh_tokens")
public class RefreshToken {
	@Id
	@Column(nullable = false)
	private UUID id;

	@Column(name = "user_id", nullable = false)
	private UUID userId;

	@Column(nullable = false, length = 500)
	private String token;

	@Column(name = "expires_at", nullable = false)
	private OffsetDateTime expiresAt;

	@Column(name = "created_at", nullable = false)
	private OffsetDateTime createdAt;

	@Column(nullable = false)
	private boolean revoked;

	public RefreshToken() {}

	public static RefreshToken of(UUID userId, String token, OffsetDateTime expiresAt) {
		RefreshToken r = new RefreshToken();
		r.id = UUID.randomUUID();
		r.userId = userId;
		r.token = token;
		r.expiresAt = expiresAt;
		r.createdAt = OffsetDateTime.now();
		r.revoked = false;
		return r;
	}

	public UUID getId() { return id; }
	public UUID getUserId() { return userId; }
	public String getToken() { return token; }
	public OffsetDateTime getExpiresAt() { return expiresAt; }
	public boolean isRevoked() { return revoked; }
	public void setRevoked(boolean revoked) { this.revoked = revoked; }
}