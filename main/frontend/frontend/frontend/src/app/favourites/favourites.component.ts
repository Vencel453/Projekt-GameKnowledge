import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FavouritesService, IFavouriteGame } from '../../favourite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
    favourites: IFavouriteGame[] = [];

    constructor(private favouritesService: FavouritesService, private router: Router) {
      this.favouritesService.favourites$.subscribe(data => {
        this.favourites = data;
      });
    }

    toGame(id: number): void {
      if (!id){
        console.log('NINCS ID');
        return;
      }
      this.router.navigate(['/game', id]);
    }

    removeGame(gameId: number): void {
      this.favouritesService.removeFavourite(gameId);
    }
}
