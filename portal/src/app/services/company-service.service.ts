import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {Company} from '../entity/company';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private httpClient:HttpClient) { }

  getCompanyList():Observable<Company[]>{
    console.log("calling list request:inside service ")
      return this.httpClient.get<Company[]>("company")
      .pipe(catchError(this.handleError));
  }



  AddCompany(company:Company):Observable<any>{
    console.log("input:",company)
      return this.httpClient.post("company",company);
  }

  getCompanyListByPagination(pageNo:number,rowSize:number):Observable<Company[]>{
    console.log("inside getCompanyListByPagination:");
    return this.httpClient.get<Company[]>("company/pageLimit?limit="+pageNo+"&rows="+rowSize)
    .pipe(catchError(this.handleError));
  }

  getTotalCompanies():Observable<number>{
    return this.httpClient.get<number>("company/count").pipe(catchError(this.handleError));
  }
  private handleError(errorResponse:HttpErrorResponse){
      if(errorResponse.error instanceof ErrorEvent){
        console.error("client Side error:",errorResponse.error.message);
      }else{
        console.error("server Side error:",errorResponse);
      }

      return throwError("something went wrong");
  }




}
