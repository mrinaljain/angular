import { Component } from "@angular/core";

@Component({
 selector : 'my-employee',
 templateUrl : 'app/employee/employee.component.html',
 styleUrls : ['app/employee/employee.component.css']
})

export class EmployeeComponent{
   firstname: string =  'Mrinal';
   lastname : string = 'Jain';
   gender : string = 'Male';
   age : number = 25;
   rowSpan : number = 2 ;
   onClick() : void {
      alert("It Works...!");  
   }
   showDetails : boolean = false;
   toggleShow(): void{
      this.showDetails = !this.showDetails;
   }
}