import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { environment } from '../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private Service: LoginService) { }  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const token = this.Service.getToken();
       const currentUser= JSON.parse(localStorage.getItem('currentUser') || '{}')
       const isLoggedIn = currentUser && token;
       const isApiUrl = request.url.startsWith(environment.API_URL);
       if (isLoggedIn && isApiUrl){
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
       }
       return next.handle(request);
    }
}

