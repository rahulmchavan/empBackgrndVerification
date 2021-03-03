import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadDocService {

  constructor(private http: HttpClient) {
 
  }

  saveDocuments(docdata){
   let url = "http://localhost:8080/employee/save";
   return this.http.post(url,docdata);
  }
}
