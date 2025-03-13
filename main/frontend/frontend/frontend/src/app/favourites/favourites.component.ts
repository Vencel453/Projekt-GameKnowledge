import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FavouritesService, IFavouriteGame } from '../../favourite.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
    favourites: IFavouriteGame[] = [];

    constructor(private favouritesService: FavouritesService, private router: Router, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
      this.favouritesService.favourites$.subscribe(favs => {
        this.favourites = favs;
      });
      this.favouritesService.fetchFavourites();
    }

    toGame(gameId: number): void {
      if (!gameId){
        console.log('NINCS ID');
        return;
      }
      this.router.navigate(['/game', gameId]);
    }

    removeGame(gameId: number): void {
      this.favouritesService.removeGame(gameId).subscribe({
        next: response => {
          if(!response.error){
            this.snackBar.open('Game has been removed!', 'Close', {duration: 10000, panelClass: 'custombar'});
          }else {
            this.snackBar.open('An error occured with the removal of the game.', 'Close', {duration: 10000, panelClass: 'custombar'});
          }
        },
        error: err => {
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
