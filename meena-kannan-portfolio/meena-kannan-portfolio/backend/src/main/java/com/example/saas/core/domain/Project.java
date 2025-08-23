package com.example.saas.core.domain;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "projects")
public class Project {
	@Id
	@Column(nullable = false)
	private UUID id;

	@Column(name = "tenant_id", nullable = false)
	private UUID tenantId;

	@Column(nullable = false)
	private String name;

	@Column(columnDefinition = "TEXT")
	private String description;

	@Column(nullable = false)
	private String status;

	@Column(name = "created_by", nullable = false)
	private UUID createdBy;

	@Column(name = "created_at", nullable = false)
	private OffsetDateTime createdAt;

	@Column(name = "updated_at", nullable = false)
	private OffsetDateTime updatedAt;

	@Column(name = "soft_deleted", nullable = false)
	private boolean softDeleted;

	public Project() {}

	public static Project of(UUID tenantId, String name, String description, String status, UUID createdBy) {
		Project p = new Project();
		p.id = UUID.randomUUID();
		p.tenantId = tenantId;
		p.name = name;
		p.description = description;
		p.status = status;
		p.createdBy = createdBy;
		p.createdAt = OffsetDateTime.now();
		p.updatedAt = p.createdAt;
		p.softDeleted = false;
		return p;
	}

	public UUID getId() { return id; }
	public UUID getTenantId() { return tenantId; }
	public String getName() { return name; }
	public String getDescription() { return description; }
	public String getStatus() { return status; }
	public UUID getCreatedBy() { return createdBy; }
	public OffsetDateTime getCreatedAt() { return createdAt; }
	public OffsetDateTime getUpdatedAt() { return updatedAt; }
	public boolean isSoftDeleted() { return softDeleted; }

	public void setName(String name) { this.name = name; }
	public void setDescription(String description) { this.description = description; }
	public void setStatus(String status) { this.status = status; }
	public void setUpdatedAt(OffsetDateTime updatedAt) { this.updatedAt = updatedAt; }
	public void setSoftDeleted(boolean softDeleted) { this.softDeleted = softDeleted; }
}