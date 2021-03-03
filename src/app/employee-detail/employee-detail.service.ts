import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor(private http:HttpClient) {
   }

   public getallemployeeDetail(){
     let url=  'https://reqres.in/api/users/2'
     return this.http.get(url);
   }
}
