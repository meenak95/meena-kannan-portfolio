package com.example.saas.core.domain;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "audit_logs")
public class AuditLog {
	@Id
	@Column(nullable = false)
	private UUID id;

	@Column(nullable = false)
	private String entity;

	@Column(name = "entity_id", nullable = false)
	private UUID entityId;

	@Column(nullable = false)
	private String action;

	@Column(name = "performed_by")
	private UUID performedBy;

	@Column(name = "tenant_id")
	private UUID tenantId;

	@Column(name = "timestamp", nullable = false)
	private OffsetDateTime timestamp;

	public AuditLog() {}

	public static AuditLog of(String entity, UUID entityId, String action, UUID performedBy, UUID tenantId) {
		AuditLog a = new AuditLog();
		a.id = UUID.randomUUID();
		a.entity = entity;
		a.entityId = entityId;
		a.action = action;
		a.performedBy = performedBy;
		a.tenantId = tenantId;
		a.timestamp = OffsetDateTime.now();
		return a;
	}
}