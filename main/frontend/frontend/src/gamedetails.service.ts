//Szükséges importok
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { IGamesResponse } from "./gamedetails.model";

//Globálisan elérhető szolgáltatás
@Injectable({
    providedIn: 'root'
})
export class GameDetailsService {
    private backendURL = 'http://localhost:3000/game';  //Backend végpont

    //HTTP kliens injektálása
    constructor(private http: HttpClient) {}

    //Egy adott játék részleteinek a lekérdezése
    getGamesDetailsByID(id: number): Observable<IGamesResponse> {
        return this.http.get<IGamesResponse>(`${this.backendURL}/${id}`).pipe(
            catchError((err) => {
                console.error('Something went wrong during fetching data', err);
                return throwError(() => new Error('Something went wrong loading the games data!'));
            })
        );
    }
}