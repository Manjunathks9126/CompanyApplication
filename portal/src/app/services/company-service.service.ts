import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {Company} from '../entity/company';
import {catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private httpClient:HttpClient) { }

  getCompanyList():Observable<Company[]>{
    console.log("calling list request:inside service ")
      return this.httpClient.get<Company[]>(environment.apiPath+"company")
      .pipe(catchError(this.handleError));
  }



  AddCompany(company:Company):Observable<any>{
    console.log("input:",company)
      return this.httpClient.post(environment.apiPath+"company",company);
  }

  getCompanyListByPagination(pageNo:number,rowSize:number):Observable<Company[]>{
    console.log("inside getCompanyListByPagination:");
    return this.httpClient.get<Company[]>(environment.apiPath+"company/pageLimit?limit="+pageNo+"&rows="+rowSize)
    .pipe(catchError(this.handleError));
  }

  getTotalCompanies():Observable<number>{
    return this.httpClient.get<number>(environment.apiPath+"company/count").pipe(catchError(this.handleError));
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
