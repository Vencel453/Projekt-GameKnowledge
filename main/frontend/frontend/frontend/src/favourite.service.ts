import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";

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

    constructor(private http: HttpClient) {}

    fetchFavourites(): void {
        this.http.get<{error: boolean, message: string, favourites: IFavouriteGame[]}>(this.backendURL)
        .pipe(
            catchError(this.handleError)
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
            catchError(this.handleError)
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
          catchError(this.handleError)
        );
      }

    private handleError(error: HttpErrorResponse){
        console.error(error);
        return throwError(() => new Error('Something went wrong try again'));
    }

}