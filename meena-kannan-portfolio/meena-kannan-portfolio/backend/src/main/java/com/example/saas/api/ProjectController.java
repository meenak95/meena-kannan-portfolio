package com.example.saas.api;

import com.example.saas.core.domain.Project;
import com.example.saas.core.service.ProjectService;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/projects")
@Validated
public class ProjectController {
	private final ProjectService projectService;

	public ProjectController(ProjectService projectService) {
		this.projectService = projectService;
	}

	@GetMapping
	public List<Project> list() {
		return projectService.listProjects();
	}

	@GetMapping("/{id}")
	public Project get(@PathVariable UUID id) {
		return projectService.getProject(id);
	}

	@PostMapping
	public ResponseEntity<Project> create(@RequestBody CreateRequest req) {
		Project p = projectService.createProject(req.name, req.description, req.status, req.createdBy);
		return ResponseEntity.created(URI.create("/api/projects/" + p.getId())).body(p);
	}

	@PatchMapping("/{id}")
	public Project update(@PathVariable UUID id, @RequestBody UpdateRequest req) {
		return projectService.updateProject(id, req.name, req.description, req.status);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable UUID id) {
		projectService.deleteProject(id);
		return ResponseEntity.noContent().build();
	}

	public static class CreateRequest {
		@NotBlank
		@Size(max = 255)
		public String name;
		public String description;
		@NotBlank
		public String status;
		public UUID createdBy;
	}

	public static class UpdateRequest {
		public String name;
		public String description;
		public String status;
	}
}