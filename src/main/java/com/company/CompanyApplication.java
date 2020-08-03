package com.company;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class CompanyApplication {

	 private final static Logger logger = LoggerFactory.getLogger(CompanyApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(CompanyApplication.class, args);
		logger.info("CompanyApplication initialized");
	}

}
