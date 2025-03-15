//Szükséges importok
import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";

//Szolgáltatás globálisan elérhető
@Injectable({
    providedIn: 'root'
})
export class MyprofileService {
    private backendURL = 'http://localhost:3000/myprofile'; //Backend URL amely a profiladatokat kezeli

    //HTTP kliens injektálása
    constructor(private http: HttpClient) { }

    //Felhasználói adatok lekérése a backend-ből
    getUser(): Observable<any> {
        return this.http.get(`${this.backendURL}`);
    }

    //Felhasználói adatok frissítése a backend-ben
    updateData(data: any): Observable<any> {
        return this.http.post(`${this.backendURL}`, data);
    }
}