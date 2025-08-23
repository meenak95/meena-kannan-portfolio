package com.example.saas.api;

import com.example.saas.core.domain.Project;
import com.example.saas.core.service.ProjectService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/projects", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProjectController {
	private final ProjectService service;
	public ProjectController(ProjectService service) { this.service = service; }

	@GetMapping
	public List<Project> list(@RequestHeader("X-Tenant-ID") UUID tenantId,
	                         @RequestParam(defaultValue = "0") int page,
	                         @RequestParam(defaultValue = "10") int size) {
		return service.listRecent(tenantId);
	}

	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public Project create(@RequestHeader("X-Tenant-ID") UUID tenantId,
	                     @RequestHeader(value = "X-User-ID") UUID userId,
	                     @RequestBody Map<String, String> body) {
		String name = body.get("name");
		String description = body.getOrDefault("description", "");
		if (name == null || name.isBlank()) throw new IllegalArgumentException("name is required");
		return service.create(tenantId, name, description, userId);
	}

	@PatchMapping(path = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
	public Project update(@RequestHeader("X-Tenant-ID") UUID tenantId,
	                     @PathVariable UUID id,
	                     @RequestBody Map<String, String> body) {
		return service.update(tenantId, id, body.get("name"), body.get("description"), body.get("status"));
	}

	@DeleteMapping("/{id}")
	public void delete(@RequestHeader("X-Tenant-ID") UUID tenantId, @PathVariable UUID id) {
		service.softDelete(tenantId, id);
	}
}