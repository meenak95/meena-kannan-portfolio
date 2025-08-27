package com.example.saas.persistence.repo;

import com.example.saas.core.domain.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface ClientRepository extends JpaRepository<Client, UUID> {
	Page<Client> findAllByTenantId(UUID tenantId, Pageable pageable);
	long countByTenantId(UUID tenantId);
}