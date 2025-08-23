package com.example.saas.persistence.repo;

import com.example.saas.core.domain.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.OffsetDateTime;
import java.util.Optional;
import java.util.UUID;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, UUID> {
	Optional<RefreshToken> findByTokenAndRevokedFalse(String token);
	long deleteByExpiresAtBefore(OffsetDateTime cutoff);
}