import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpDetailServiceService } from './emp-detail-service.service';

@Component({
  selector: 'app-emp-detail-form',
  templateUrl: './emp-detail-form.component.html',
  styleUrls: ['./emp-detail-form.component.scss']
})
export class EmpDetailFormComponent implements OnInit {



  empDetailModel:FormGroup;
  constructor( private empSevice: EmpDetailServiceService) {

    this.empDetailModel=new FormGroup({
    empId: new FormControl('',[Validators.required]),
    firstname: new FormControl(),
    middlename: new FormControl(),
    lastname: new FormControl(),
    designation: new FormControl(),
    addressl1: new FormControl(),
    addressl2: new FormControl(),
    pincode: new FormControl(),
    offerLetterDate: new FormControl(),
    joiningDate: new FormControl(),
    lastworkingday: new FormControl(),
    reportingmanager: new FormControl(),
    isincreamentdone: new FormControl(),
    lastSalaryDrawn: new FormControl()
  })
   }

  ngOnInit(): void {  }

  response:any;

  public saveData(data:any) {
    console.log(JSON.stringify(data));
    this.empSevice.saveData(data).subscribe(
      res=>{ this.response=res},
      err=>{ this.response=err}
    )
  }


}
