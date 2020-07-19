import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';


const routes: Routes = [
  {path:'',redirectTo:'companies',pathMatch:'full'},
  {path:'companies',component:CompanyListComponent},
  {path:'addCompany',component:AddCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
