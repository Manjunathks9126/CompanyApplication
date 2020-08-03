package com.company.advisor;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.company.exception.NoParamValue;

@ControllerAdvice
public class CompanyAdvisor {

	@ExceptionHandler(value=NoParamValue.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ResponseEntity<ExceptionResponse> exceptionHandler(NoParamValue exp){
		LocalDateTime d=LocalDateTime.now();
		ExceptionResponse res=new ExceptionResponse(exp.getMessage(), HttpStatus.BAD_REQUEST,"400",d);
		return new ResponseEntity<ExceptionResponse>(res, HttpStatus.BAD_REQUEST);
	}
}
