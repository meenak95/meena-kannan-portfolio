package com.example.saas.persistence.repo;

import com.example.saas.core.domain.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface DocumentRepository extends JpaRepository<Document, UUID> {
	List<Document> findAllByProjectId(UUID projectId);
	long countByProjectId(UUID projectId);
}