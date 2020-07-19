package com.company.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.company.entity.Company;

public interface CompanyRepository  extends PagingAndSortingRepository<Company, Long>{

	@Query(value="select * from Company limit ?1,?2",nativeQuery=true)
	public List<Company> findByPageLimit(int limit,int rows);
}
