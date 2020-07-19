import { Component, OnInit } from '@angular/core';
import{CompanyServiceService} from '../services/company-service.service';
import { Company } from '../entity/company';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
  
})
export class CompanyListComponent implements OnInit {

  companies:Company[];
  message:string="Loading please wait...";
  totalRecords: number = 4;
  loading: boolean=true;
  constructor(private companyService:CompanyServiceService) { }

  ngOnInit(): void {
     // this.getCompanyList();
     //this.totalRecords=10;
     this.getTotalCompanies();
  }

  getCompanyList(){
      this.companyService.getCompanyList().subscribe(companies=>{
        console.log("companies:",companies.length);
        this.companies=companies;
      },
      error=>{
      this.message=error;
      console.log("error inside component:",error);
      });
  }


  loadCompaniesLazy(event: LazyLoadEvent) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    console.log("event:",event);
    this.companyService.getCompanyListByPagination(event.first,event.rows).subscribe(companies=>{
      console.log("companies:",companies);
      this.companies=companies;
      this.loading = false;
    })

  }

  getTotalCompanies(){
    this.companyService.getTotalCompanies().subscribe(count=>{
      console.log("count:",count)
      this.totalRecords=count;
    });
  }
}
