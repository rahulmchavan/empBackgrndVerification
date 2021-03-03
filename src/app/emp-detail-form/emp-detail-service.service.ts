import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpDetailServiceService{

  constructor(private http: HttpClient) {
 
   }

   saveData(data){
    let url = "http://localhost:8080/employee/save";
    return this.http.post(url,data);
   }
}
