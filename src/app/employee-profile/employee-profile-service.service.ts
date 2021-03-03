import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileServiceService {

  constructor(private http : HttpClient) { }

  getProfile(id)
  {
    let url = "http://localhost:8080/employee/byId/"+id;

    return this.http.get(url);
  }
}
