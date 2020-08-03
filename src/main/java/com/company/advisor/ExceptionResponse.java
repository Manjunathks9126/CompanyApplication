package com.company.advisor;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import lombok.Data;

@Data
public class ExceptionResponse {

	private String message;
	private HttpStatus error;
	private String status;
	private LocalDateTime time;
	public ExceptionResponse(String message, HttpStatus error, String status, LocalDateTime time) {
		super();
		this.message = message;
		this.status = status;
		this.error = error;
		this.time = time;
	}
	
	public ExceptionResponse(String message, HttpStatus error) {
		super();
		this.message = message;
		this.error = error;
		
	}
	
	
}
