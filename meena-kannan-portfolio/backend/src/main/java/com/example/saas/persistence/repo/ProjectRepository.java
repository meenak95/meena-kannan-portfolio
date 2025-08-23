package com.example.saas.persistence.repo;

import com.example.saas.core.domain.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProjectRepository extends JpaRepository<Project, UUID> {
	Page<Project> findAllByTenantIdAndSoftDeletedFalse(UUID tenantId, Pageable pageable);
	Optional<Project> findByIdAndTenantIdAndSoftDeletedFalse(UUID id, UUID tenantId);
	long countByTenantIdAndSoftDeletedFalse(UUID tenantId);
	List<Project> findTop50ByTenantIdAndSoftDeletedFalseOrderByCreatedAtDesc(UUID tenantId);
}