package com.example.saas.core.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "tenants")
public class Tenant {
	@Id
	@Column(nullable = false)
	private UUID id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String plan;

	@Column(name = "created_at", nullable = false)
	private OffsetDateTime createdAt;

	public Tenant() {
	}

	public static Tenant of(String name, String plan) {
		Tenant t = new Tenant();
		t.id = UUID.randomUUID();
		t.name = name;
		t.plan = plan;
		t.createdAt = OffsetDateTime.now();
		return t;
	}

	public UUID getId() { return id; }
	public String getName() { return name; }
	public String getPlan() { return plan; }
	public OffsetDateTime getCreatedAt() { return createdAt; }

	public void setName(String name) { this.name = name; }
	public void setPlan(String plan) { this.plan = plan; }
}