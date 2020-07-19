import { Employee } from './employee';

export class Company{
    compId:String;
    compName:String;
    foundedYear:String;
    compCEO:String;
    compEmployees:Employee[]=new Array<Employee>();

    constructor(compName:String,foundedYear:String,compCEO:String){
            this.compName=compName;
            this.foundedYear=foundedYear;
            this.compCEO=compCEO;
    }
}