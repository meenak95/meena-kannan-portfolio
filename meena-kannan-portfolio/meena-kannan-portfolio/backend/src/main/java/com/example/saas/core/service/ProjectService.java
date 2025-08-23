package com.example.saas.core.service;

import com.example.saas.core.domain.Project;
import com.example.saas.persistence.repo.ProjectRepository;
import com.example.saas.security.TenantContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class ProjectService {
	private final ProjectRepository projectRepository;

	public ProjectService(ProjectRepository projectRepository) {
		this.projectRepository = projectRepository;
	}

	@Transactional(readOnly = true)
	public List<Project> listProjects() {
		UUID tenantId = TenantContext.requireTenantId();
		return projectRepository.findByTenantIdAndSoftDeletedFalse(tenantId);
	}

	@Transactional(readOnly = true)
	public Project getProject(UUID id) {
		UUID tenantId = TenantContext.requireTenantId();
		return projectRepository.findByIdAndTenantIdAndSoftDeletedFalse(id, tenantId)
			.orElseThrow(() -> new IllegalArgumentException("Project not found"));
	}

	@Transactional
	public Project createProject(String name, String description, String status, UUID createdBy) {
		UUID tenantId = TenantContext.requireTenantId();
		Project p = Project.of(tenantId, name, description, status, createdBy);
		return projectRepository.save(p);
	}

	@Transactional
	public Project updateProject(UUID id, String name, String description, String status) {
		Project p = getProject(id);
		if (name != null) p.setName(name);
		if (description != null) p.setDescription(description);
		if (status != null) p.setStatus(status);
		p.setUpdatedAt(OffsetDateTime.now());
		return projectRepository.save(p);
	}

	@Transactional
	public void deleteProject(UUID id) {
		Project p = getProject(id);
		p.setSoftDeleted(true);
		p.setUpdatedAt(OffsetDateTime.now());
		projectRepository.save(p);
	}
}