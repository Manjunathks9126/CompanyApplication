package com.company.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Employee {

	@Id @GeneratedValue
	private Long empId;
	private String empName;
	@ManyToOne(cascade=CascadeType.ALL)
	private Company company;
}
