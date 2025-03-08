import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export interface Searchresults {
    id: number;
    gameTitle: string;
    altGameTitle: string | null;
    release: string;
    boxart: string;
}

export interface Searchresponse {
    errro: boolean;
    message: string;
    game?: Searchresults[];
}

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private backendURL = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}

    searchGames(query: string): Observable<Searchresponse> {
        return this.http.put<Searchresponse>(this.backendURL, {search: query});
    }
}