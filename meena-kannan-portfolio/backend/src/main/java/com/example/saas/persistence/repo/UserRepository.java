package com.example.saas.persistence.repo;

import com.example.saas.core.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
	Optional<User> findByEmailIgnoreCase(String email);
}