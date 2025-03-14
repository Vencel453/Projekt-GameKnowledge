import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { Authservice } from "./app/authservice";

export interface IFavouriteGame {
    id: number;
    gameTitle: string;
    boxart: string;
}

@Injectable({
    providedIn: 'root'
})
export class FavouritesService {
    private backendURL = 'http://localhost:3000/favourites';
    private favouritesSubject = new BehaviorSubject<IFavouriteGame[]>([]);

    favourites$ = this.favouritesSubject.asObservable();

    constructor(private http: HttpClient, private snackBar: MatSnackBar, private authservice: Authservice) {}

    fetchFavourites(): void {
        this.http.get<{error: boolean, message: string, favourites: IFavouriteGame[]}>(this.backendURL)
        .pipe(
            catchError(this.handleError.bind(this))
        )
        .subscribe(response => {
            if(!response.error){
                this.favouritesSubject.next(response.favourites);
            }else {
                console.error(response.message);
            }
        });
    }

    addtoFavourite(id: number): Observable<{error: boolean, message: string}>{
        const URL = `http://localhost:3000/game/${id}`;
        return this.http.post<{error: boolean, message: string}>(URL, {})
        .pipe(
            tap(response => {
                if(!response.error) {
                    this.fetchFavourites();
                }
            }),
            catchError(this.handleError.bind(this))
        );
    }

    removeGame(id: number): Observable<{error: boolean, message: string}>{
        const options = {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          body: {gameId: id}
        };
        return this.http.delete<{error: boolean, message: string}>(this.backendURL, options)
        .pipe(
          tap(response => {
            if(!response.error){
              this.fetchFavourites();
            }
          }),
          catchError(this.handleError.bind(this))
        );
      }

    private handleError(error: HttpErrorResponse){
        if (error.status === 401) {
            this.authservice.logout();
            this.snackBar.open('Your session is over, please login again!', 'Close', {duration: 10000, panelClass: 'custombar'});
        }
        return throwError(() => new Error('Something went wrong'));
    }

}