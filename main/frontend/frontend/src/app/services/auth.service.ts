import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'https://localhost:3000/login';

  constructor(private https: HttpClient) { }

    login(username: string, password: string):Observable<any>{
      return this.https.post(`${this.baseURL}/login`, {username, password});
    }

    saveToken(token: string): void{
      localStorage.setItem('authortoken', token);
    }

    getToken(): string | null{
      return localStorage.getItem('authortoken');
    }

    logout(): void{
      return localStorage.removeItem('authortoken');
    }

}
