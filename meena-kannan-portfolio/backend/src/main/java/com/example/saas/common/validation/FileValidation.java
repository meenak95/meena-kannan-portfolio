package com.example.saas.common.validation;

import java.util.Set;

public final class FileValidation {
	private static final Set<String> ALLOWED = Set.of("application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");

	private FileValidation() {}

	public static boolean isAllowedMime(String contentType) {
		return contentType != null && ALLOWED.contains(contentType);
	}
}