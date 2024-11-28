import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private backendUrl = 'https://localhost3000';


constructor(private http: HttpClient){ }

    regist(userData: { username: string, password: string, passagain: string, email: string}): Observable<any>{
        return this.http.post(`${this.backendUrl}/regist`, userData);
    }

    login(userData: {username: string, password: string}): Observable<any>{
        return this.http.post(`${this.backendUrl}/login`, userData);
    }

    

}