import { Injectable, makeStateKey, TransferState } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

const GAMEDATAKEY = makeStateKey<any>('gameData');

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private backendURL = 'http://localhost:3000/';

  constructor(private http: HttpClient, private transferState: TransferState) { }

  getGameData(): Observable<any>{
    const gameData = this.transferState.get(GAMEDATAKEY, null);

    if(gameData){
      return of(gameData);
    }else{
      return this.http.get<any>(this.backendURL).pipe(
        map((data) => {
          this.transferState.set(GAMEDATAKEY, data);
          return data;
        }),
        catchError((error) =>{
          console.error('Error fetching game data: ', error);
          return of(null);
        })
      )
    }
  }
}
