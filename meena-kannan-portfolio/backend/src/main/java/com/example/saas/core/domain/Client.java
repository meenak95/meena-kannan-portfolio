package com.example.saas.core.domain;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "clients")
public class Client {
	@Id
	@Column(nullable = false)
	private UUID id;

	@Column(name = "tenant_id", nullable = false)
	private UUID tenantId;

	@Column(nullable = false)
	private String name;

	@Column(name = "contact_info", columnDefinition = "TEXT")
	private String contactInfo;

	@Column(name = "created_at", nullable = false)
	private OffsetDateTime createdAt;

	public Client() {}

	public static Client of(UUID tenantId, String name, String contactInfo) {
		Client c = new Client();
		c.id = UUID.randomUUID();
		c.tenantId = tenantId;
		c.name = name;
		c.contactInfo = contactInfo;
		c.createdAt = OffsetDateTime.now();
		return c;
	}

	public UUID getId() { return id; }
	public UUID getTenantId() { return tenantId; }
	public String getName() { return name; }
	public String getContactInfo() { return contactInfo; }
	public OffsetDateTime getCreatedAt() { return createdAt; }

	public void setName(String name) { this.name = name; }
	public void setContactInfo(String contactInfo) { this.contactInfo = contactInfo; }
}