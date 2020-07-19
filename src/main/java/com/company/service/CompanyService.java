package com.company.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.company.entity.Company;
import com.company.repository.CompanyRepository;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@Service
@AllArgsConstructor
public class CompanyService {

	private final CompanyRepository repo;
	
	public List<Company> findAllCompanies(){
		return (List<Company>) repo.findAll();
	}
	
	public List<Company> findByPagination(int pageNo,int rowSize){
		Pageable page=PageRequest.of(pageNo, rowSize);
		Page<Company> result=repo.findAll(page);
		return result.getContent();
	}
	
	public Company addCompany(Company company) {
		System.out.println("Inside service");
		return repo.save(company);
	}
	
	public List<Company> findByPageLimit(int limit,int rows){
		
		return repo.findByPageLimit(limit, rows);
	}
	
	public long findTotalCompanies() {
		return repo.count();
	}
}
