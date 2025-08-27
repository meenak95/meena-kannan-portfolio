package com.example.saas.persistence.repo;

import com.example.saas.core.domain.Tenant;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface TenantRepository extends JpaRepository<Tenant, UUID> {
	Optional<Tenant> findByNameIgnoreCase(String name);
}