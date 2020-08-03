package com.company.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.company.entity.Company;
import com.company.exception.NoParamValue;
import com.company.service.CompanyService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/v1")
@AllArgsConstructor
public class CompanyController {
	
	private final CompanyService service;
	
	@GetMapping("/company")
	public ResponseEntity<List<Company>> findAll(@RequestParam Map<String, String> reqParams){
		log.debug("inside findAll Companies");
		log.debug("reqParams:"+reqParams);
		List<Company> companies=new ArrayList<Company>();
		if(reqParams!=null&&reqParams.size()>0) {
			String name=reqParams.get("name");
			if(null!=name&&name.length()>0)
				companies=service.findByCompanyName(name);
			else
				throw new NoParamValue("Please provide value for name param");
		}else
		companies=service.findAllCompanies();
		return ResponseEntity.ok(companies);
	}
  
	@GetMapping("/company/page")
	public ResponseEntity<List<Company>> findByPagination(@RequestParam("pageNo") int pageNo,@RequestParam("rowSize") int rowSize){
		//pageNo=pageNo-1;
		System.out.println("pageNo:"+pageNo);
		List<Company> list=service.findByPagination(pageNo, rowSize);
		return ResponseEntity.ok(list);
	}
	@GetMapping("/company/pageLimit")
	public ResponseEntity<List<Company>> findByPageLimit(@RequestParam("limit") int limit,@RequestParam("rows") int rows){
		List<Company> list=service.findByPageLimit(limit, rows);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/company/count")
	public long findTotalCompanies() {
		return service.findTotalCompanies();
	}
	@PostMapping("/company")
	public ResponseEntity<?> addCompany(@RequestBody Company company){
		log.debug("create Company");
		System.out.println("company:"+company);
		
		Company response=service.addCompany(company);
		return ResponseEntity.ok(response);
	}

//	@GetMapping("/company")
//	public ResponseEntity<?> findCompanyByName(@RequestParam("name") String name){
//		return ResponseEntity.ok(service.findByCompanyName(name));
//	}
}
