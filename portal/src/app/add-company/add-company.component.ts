import { Component, OnInit } from '@angular/core';
import {DatePickerComponent} from 'ng2-date-picker'; 
import { NgForm } from '@angular/forms';
import { Company } from '../entity/company';
import { CompanyServiceService } from '../services/company-service.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  compName:String;
  compCEO:String;
  foundedYear:Date;
   msgs:any[]=[];
  day:String;
  month:String;
  company:Company;
  myDate:Date;
  constructor(private companyService:CompanyServiceService) { }

  ngOnInit(): void {
  }
  AddBooks(compForm:NgForm){
    console.log(compForm.value.name);
    console.log(compForm.value.year);
    console.log(compForm.value.ceo);
    let day = this.foundedYear.getDate();
    let mon = this.foundedYear.getMonth() + 1; // add 1 because months are indexed from 0
    let year = this.foundedYear.getFullYear();
    this.month=this.dayAndMonthConversion(mon);
    this.day=this.dayAndMonthConversion(day);
    var date=this.day+"-"+this.month+"-"+year;
    console.log("date:",date);
    this.company=new Company(this.compName,date,this.compCEO);
    
    this.companyService.AddCompany(this.company).subscribe(response=>{
      console.log("response:",response);
      this.compName="";
      this.compCEO="";
      this.foundedYear=this.myDate;
      this.show();
    })
    
  }

   dayAndMonthConversion(val:Number):String{
    let res="";
    if(val < 10){
      res="0"+val;
    }else{
      res=val+"";
    }
    return res;
  }

  show() {
    this.msgs.push({severity:'success', summary:'Message', detail:'Company Added Successfully'});
}



}
