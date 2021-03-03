import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadDocService } from './upload-doc.service';

@Component({
  selector: 'app-upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.scss']
})
export class UploadDocComponent implements OnInit {
  uploaddocModel:FormGroup
  constructor(  private empdocSevice: UploadDocService) {

    this.uploaddocModel=new FormGroup({
      photo: new FormControl('',[Validators.required]),
    pancard: new FormControl(),
    aadharcard: new FormControl(),
    offerletter: new FormControl(),
    expletter: new FormControl(),
    Incrmntletter: new FormControl(),
    salaryslip: new FormControl(),
    hsccertificate: new FormControl(),
    degreecertificate: new FormControl(),
    degreemarksht: new FormControl(),
  })
   }
  ngOnInit(): void {
  }
  response:any;

  public saveDocuments(docdata:any) {
    console.log(JSON.stringify(docdata));
    this.empdocSevice.saveDocuments(docdata).subscribe(
      res=>{ this.response=res},
      err=>{ this.response=err}
    )
  }


}
