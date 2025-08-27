package com.example.saas.persistence.repo;

import com.example.saas.core.domain.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProjectRepository extends JpaRepository<Project, UUID> {
	List<Project> findByTenantIdAndSoftDeletedFalse(UUID tenantId);
	Optional<Project> findByIdAndTenantIdAndSoftDeletedFalse(UUID id, UUID tenantId);
}