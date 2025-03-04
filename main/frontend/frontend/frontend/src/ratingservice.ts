import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, throwError, throwIfEmpty } from "rxjs";
import { application } from "express";
import { IRatingsResponse } from "./gamedetails.model";

@Injectable({
    providedIn: 'root'
})
export class ratingservice {
    private backendurl = 'http://localhost:3000/game';

    constructor(private http: HttpClient) {}

    rate(gameid: string, isPositive: boolean) {
        return this.http.put<IRatingsResponse>(
            `${this.backendurl}/${gameid}`,
            {isPositive}, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                })
            }
        ).pipe(
            catchError(error => throwError(() => error))
        );
    }
}