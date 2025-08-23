package com.example.saas.core.domain;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "documents")
public class Document {
	@Id
	@Column(nullable = false)
	private UUID id;

	@Column(name = "project_id", nullable = false)
	private UUID projectId;

	@Column(nullable = false)
	private String filename;

	@Column(name = "content_type", nullable = false)
	private String contentType;

	@Column(nullable = false)
	private long size;

	@Lob
	@Column(name = "content_blob", nullable = false)
	private byte[] contentBlob;

	@Column(name = "uploaded_by", nullable = false)
	private UUID uploadedBy;

	@Column(name = "uploaded_at", nullable = false)
	private OffsetDateTime uploadedAt;

	public Document() {}

	public static Document of(UUID projectId, String filename, String contentType, long size, byte[] contentBlob, UUID uploadedBy) {
		Document d = new Document();
		d.id = UUID.randomUUID();
		d.projectId = projectId;
		d.filename = filename;
		d.contentType = contentType;
		d.size = size;
		d.contentBlob = contentBlob;
		d.uploadedBy = uploadedBy;
		d.uploadedAt = OffsetDateTime.now();
		return d;
	}

	public UUID getId() { return id; }
	public UUID getProjectId() { return projectId; }
	public String getFilename() { return filename; }
	public String getContentType() { return contentType; }
	public long getSize() { return size; }
	public byte[] getContentBlob() { return contentBlob; }
	public UUID getUploadedBy() { return uploadedBy; }
	public OffsetDateTime getUploadedAt() { return uploadedAt; }
}