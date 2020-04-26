import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './book-list/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
    url = "http://127.0.0.1:8000/" //api for backend
    httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    Login(user: User): Observable<User>{
      return this.http.post<User>(this.url+'login',user,this.httpHeaders)
    }
    Register(user: User): Observable<User>{
      return this.http.post<User>(this.url+'register',user,this.httpHeaders)
    }
}
