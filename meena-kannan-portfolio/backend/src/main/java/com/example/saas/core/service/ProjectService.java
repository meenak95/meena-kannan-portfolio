package com.example.saas.core.service;

import com.example.saas.core.domain.Project;
import com.example.saas.persistence.repo.ProjectRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class ProjectService {
	private final ProjectRepository projects;

	public ProjectService(ProjectRepository projects) { this.projects = projects; }

	public Page<Project> list(UUID tenantId, int page, int size) {
		return projects.findAllByTenantIdAndSoftDeletedFalse(tenantId, PageRequest.of(page, size));
	}

	public List<Project> listRecent(UUID tenantId) {
		return projects.findTop50ByTenantIdAndSoftDeletedFalseOrderByCreatedAtDesc(tenantId);
	}

	public Project create(UUID tenantId, String name, String description, UUID userId) {
		Project p = Project.of(tenantId, name, description, "NEW", userId);
		return projects.save(p);
	}

	public Project update(UUID tenantId, UUID id, String name, String description, String status) {
		Project p = projects.findByIdAndTenantIdAndSoftDeletedFalse(id, tenantId)
			.orElseThrow(() -> new IllegalArgumentException("Project not found"));
		if (name != null) p.setName(name);
		if (description != null) p.setDescription(description);
		if (status != null) p.setStatus(status);
		p.setUpdatedAt(OffsetDateTime.now());
		return projects.save(p);
	}

	public void softDelete(UUID tenantId, UUID id) {
		Project p = projects.findByIdAndTenantIdAndSoftDeletedFalse(id, tenantId)
			.orElseThrow(() -> new IllegalArgumentException("Project not found"));
		p.setSoftDeleted(true);
		p.setUpdatedAt(OffsetDateTime.now());
		projects.save(p);
	}
}