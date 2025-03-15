//Szükséges importok
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { Authservice } from "./app/authservice";

//Kedvenceket reprezentáló interface
export interface IFavouriteGame {
    id: number;
    gameTitle: string;
    boxart: string;
}

//Globálisan elérhető szolgáltatás
@Injectable({
    providedIn: 'root'
})
export class FavouritesService {
    //Backend URL a kedvencekhez való hozzáféréshez
    private backendURL = 'http://localhost:3000/favourites';
    //A kedvenc játékok tárolásának megosztása a komponensnek között
    private favouritesSubject = new BehaviorSubject<IFavouriteGame[]>([]);

    //Figyeli a kedvenceket
    favourites$ = this.favouritesSubject.asObservable();

    //Injektáljuk a HTTP klienst, a felugró üzenet ablakot és az Authservice-t
    constructor(private http: HttpClient, private snackBar: MatSnackBar, private authservice: Authservice) {}

    //Kedvencek lekérése a backend-től
    fetchFavourites(): void {
        this.http.get<{error: boolean, message: string, favourites: IFavouriteGame[]}>(this.backendURL)
        .pipe(
            catchError(this.handleError.bind(this))
        )
        .subscribe(response => {
            //Ha nincs hiba akkor frissíti a kedvencek listáját
            if(!response.error){
                this.favouritesSubject.next(response.favourites);
            }else {
                console.error(response.message);
            }
        });
    }

    //Adott játék kedvencekhez adása
    addtoFavourite(id: number): Observable<{error: boolean, message: string}>{
        const URL = `http://localhost:3000/game/${id}`;
        return this.http.post<{error: boolean, message: string}>(URL, {})
        .pipe(
            tap(response => {
                if(!response.error) {
                    //Ha hozzáadta minden gond nélkül akkor frissíti a listát
                    this.fetchFavourites();
                }
            }),
            catchError(this.handleError.bind(this))
        );
    }

    //Adott játék kedvencekből való eltávolítása
    removeGame(id: number): Observable<{error: boolean, message: string}>{
        const options = {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          body: {gameId: id}    //Az adott játék azonosítója a törlés kérésben
        };
        return this.http.delete<{error: boolean, message: string}>(this.backendURL, options)
        .pipe(
          tap(response => {
            if(!response.error){
                //Sikeres törlés esetén frissíti a listát
              this.fetchFavourites();
            }
          }),
          catchError(this.handleError.bind(this))
        );
      }

      //Hibakezelő függvény
    private handleError(error: HttpErrorResponse){
        if (error.status === 401) {
            this.authservice.logout();
            this.snackBar.open('Your session is over, please login again!', 'Close', {duration: 10000, panelClass: 'custombar'});
        }
        return throwError(() => new Error('Something went wrong'));
    }

}