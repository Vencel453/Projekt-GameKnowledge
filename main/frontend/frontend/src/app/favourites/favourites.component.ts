//Szükséges importok
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FavouritesService, IFavouriteGame } from '../../favourite.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

//Standalone komponens definiálása
@Component({
  selector: 'app-favourites',
  standalone: true,
  //Szükséges importok
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
    favourites: IFavouriteGame[] = [];  //Kedvencek tömb létrehozása

    //Injektáljuk a szükséges szolgáltatásokat
    constructor(private favouritesService: FavouritesService, private router: Router, private snackBar: MatSnackBar, private title: Title) {
      //Oldal címének beállítása
      this.title.setTitle('Your Favourites');
    }

    //Kedvencek betöltése a szolgáltatás használatával
    ngOnInit() {
      this.favouritesService.favourites$.subscribe(favs => {
        this.favourites = favs;
      });
      this.favouritesService.fetchFavourites();
    }

    //Metódus amelynek hála kattintásra elvezet a listaelem az adott játék oldalára
    toGame(gameId: number): void {
      if (!gameId){
        return;
      }
      this.router.navigate(['/game', gameId]);
    }

    //Eltávolító metódus amely a játék ID alapján törli a kedvencekből a játékot
    removeGame(gameId: number): void {
      this.favouritesService.removeGame(gameId).subscribe({
        next: response => {
          if(!response.error){
            //Ha sikeres, visszajelzünk
            this.snackBar.open('Game has been removed!', 'Close', {duration: 10000, panelClass: 'custombar'});
          }else {
            this.snackBar.open('An error occured with the removal of the game.', 'Close', {duration: 10000, panelClass: 'custombar'});
          }
        },
        error: err => {
          //Ha nem sikeres, visszajelzünk
          if(err.status === 401) {
            this.snackBar.open('You must be logged in to use this feature!', 'Close', {duration: 10000, panelClass: 'custombar'});
            this.router.navigate(['/login']);
          }else if(err.status === 404) {
            this.router.navigate(['**']);
          }else {
            this.snackBar.open('Unexpected error occured.', 'Close', {duration: 10000, panelClass: 'custombar'});
          }
        }
      });
    }

    
}
