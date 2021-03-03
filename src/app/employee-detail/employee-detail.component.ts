import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeDetailService } from './employee-detail.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
  providers:[EmployeeDetailService]
})
export class EmployeeDetailComponent implements OnInit {

  employeeInfo:any;
  id:any;

  constructor(private  es:EmployeeDetailService) { 
 
  }

  public getEmployeeDetails(){
    this.es.getallemployeeDetail().subscribe(
      res => {this.employeeInfo = res },
      err => {this.employeeInfo = err}
      )

  }

  ngOnInit(): void {
  }

}
