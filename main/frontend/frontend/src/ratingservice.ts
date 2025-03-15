//Szükséges importok
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, throwError, throwIfEmpty } from "rxjs";
import { IRatingsResponse } from "./gamedetails.model";

//Globálisan elérhető szolgáltatás
@Injectable({
    providedIn: 'root'
})
export class ratingservice {
    //Backend végpont
    private backendurl = 'http://localhost:3000/game';

    //HTTP kliens injektálása a kérésekhez
    constructor(private http: HttpClient) {}

    //Értékelés küldése egy adott játékhoz
    rate(gameId: string, isPositive: boolean) {
        return this.http.put<IRatingsResponse>( //PUT kérés
            `${this.backendurl}/${gameId}`, //Végpont a játék azonosítójával
            {isPositive}, { //2 értékelés (like vagy dislike)
                //Fejlécek beállítása, beleértve a tokent
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                })
            }
        ).pipe(
            catchError(error => throwError(() => error))    //Hibakezelés
        );
    }
}