//Szükséges importok
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


//Keresési eredmények tipusának definiálása
export interface Searchresults {
    id: number; //Játék azonosítója
    gameTitle: string;  //Játék címe
    altGameTitle: string | null;    //Játék alternatív címe
    release: string;    //Játék megjelenési dátuma
    boxart: string; //Játék borítóképének URL-je
}

//Keresési válasz struktúra definiálása
export interface Searchresponse {
    errro: boolean; //Hibát jelez
    message: string;    //A válasz üzenete
    game?: Searchresults[]; //Találatok ha vannak
}

//Globálisan elérhető szolgáltatás
@Injectable({
    providedIn: 'root'
})
export class SearchService {
    //Backend végpont
    private backendURL = 'http://localhost:3000/';

    //HTTP kliens injektálása a kérésekhez
    constructor(private http: HttpClient) {}

    //Játékok keresése a megadott lekérdezés alapján
    searchGames(query: string): Observable<Searchresponse> {
        return this.http.put<Searchresponse>(this.backendURL, {search: query});
    }
}