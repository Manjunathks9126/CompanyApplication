package com.company.entity;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.company.controller.CompanyController;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Entity
@Data
@Slf4j
public class Company {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long compId;
	private String compName;
	private String foundedYear;
	private String compCEO;
	@OneToMany(cascade=CascadeType.ALL,mappedBy="company")
	private Set<Employee> compEmployees=new HashSet<>();
	
	
}
