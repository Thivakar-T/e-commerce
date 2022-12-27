import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.API_URL;
  private loginUrl = this.baseUrl + '/auth/login'
  constructor(private http: HttpClient, private router: Router) { }
  login(data: any) {
    return this.http.post<any>(this.loginUrl, data);
  }
  IsLoggedIn() {
    return localStorage.getItem('jwt') != null;
  }

  public currentUser() {
    return localStorage.getItem('currentUser');
  }

  public getToken() {
    return localStorage.getItem('token');
  }
  public getId() {
    return localStorage.getItem('id');
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    this.router.navigateByUrl('/');
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
}