import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { EmployeeProfileServiceService } from './employee-profile-service.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  constructor(private profService : EmployeeProfileServiceService) { }
  pData : any;
  id = 5;
  getEmployee(id: number)
  {
        this.profService.getProfile(id).subscribe(
          res => {this.pData = res}
          ,
          err => {this.pData = err}
        )
       
  }

  ngOnInit(): void {
    this.getEmployee(this.id)
    
  }

}
