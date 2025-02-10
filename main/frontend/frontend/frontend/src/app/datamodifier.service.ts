import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MyprofileService {
    private backendURL = 'http://localhost:3000/myprofile';

    constructor(private http: HttpClient) { }

    getUser(): Observable<any> {
        return this.http.get(`${this.backendURL}`);
    }

    updateData(data: any): Observable<any> {
        return this.http.post(`${this.backendURL}`, data);
    }
}