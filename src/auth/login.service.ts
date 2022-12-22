import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

// private baseUrl =environment.API_URL;
// private loginUrl =this.baseUrl+"/auth/login"
  
  constructor(private http:HttpClient, private router: Router) { }
  // login(data:any){
  //   return this.http.post<any>(this.loginUrl,data);
  // }
}