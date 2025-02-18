import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IGamesResponse } from "./gamedetails.model";

@Injectable({
    providedIn: 'root'
})
export class GameDetailsService {
    private backendURL = 'http://localhost:3000/game';

    constructor(private http: HttpClient) {}

    getGamesDetailsByID(id: number): Observable<IGamesResponse> {
        return this.http.get<IGamesResponse>(`${this.backendURL}/${id}`);
    }
}