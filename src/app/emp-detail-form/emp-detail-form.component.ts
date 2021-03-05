import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedServicesService } from '../shared-service/shared-services.service';
import { EmpDetailServiceService } from './emp-detail-service.service';

@Component({
  selector: 'app-emp-detail-form',
  templateUrl: './emp-detail-form.component.html',
  styleUrls: ['./emp-detail-form.component.scss']
})
export class EmpDetailFormComponent implements OnInit {
 
  empDetailModel:FormGroup;
  constructor( private empSevice: EmpDetailServiceService, private shareService:SharedServicesService  ) {

    this.empDetailModel=new FormGroup({
    empId: new FormControl('',[Validators.required]),
    firstName: new FormControl(),
    middleName: new FormControl(),
    surname: new FormControl(),
    designation: new FormControl(),
    addressl1: new FormControl(),
    addressl2: new FormControl(),
    pincode: new FormControl(),
    offerLetterDate: new FormControl(),
    joiningDate: new FormControl(),
    lastWorkingDate: new FormControl(),
    reportingManager: new FormControl(),
    incrementDone: new FormControl(),
    lastDrawnsalary: new FormControl()
  })
   }

  ngOnInit(): void {  }

  response:any;
  cityname:any
  public saveData(data:any) {
    console.log(JSON.stringify(data));
    this.empSevice.saveData(data).subscribe(
      res=>{ this.response=res},
      err=>{ this.response=err}
    )
  }

  getcity()
  {
    this.shareService.getAllCity().subscribe(
         res => {this.cityname = res},
        err => {this.cityname = err}
    )
  }
statename:any
  getstate()
  {
    this.shareService.getAllState().subscribe(
 
      res => {this.statename = res},
      err => {this.statename = err}
    )
    

    
  }
  countryname:any
  getcountry()
  {
    this.shareService.getAllCountry().subscribe(
         res => {this.countryname = res},
        err => {this.countryname = err}
    )
  }


}
