import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedServicesService {

  constructor(private http : HttpClient) {
   }

   getAllCity(){
    let cityurl = "http://localhost:8081/API/city";

    return this.http.get(cityurl);
 
   }
   getAllState(){
    let stateurl = "http://localhost:8081/API/state";

    return this.http.get(stateurl);
 
   }
   getAllCountry(){
    let countryurl = "http://localhost:8081/API/country";

    return this.http.get(countryurl);
 
   }
   
}
