import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private backendURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getGameData(): Observable<any>{
    return this.http.get<any>(this.backendURL);
  }
}
