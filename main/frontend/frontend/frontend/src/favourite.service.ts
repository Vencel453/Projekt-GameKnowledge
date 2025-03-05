import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface IFavouriteGame {
    id: number;
    title: string;
    alttitle: string;
    boxart: string;
}

@Injectable({
    providedIn: 'root'
})
export class FavouritesService {
    private stkey = 'favourites';
    private favouritesSubject = new BehaviorSubject<IFavouriteGame[]>(this.loadFavourites());

    favourites$ = this.favouritesSubject.asObservable();

    private loadFavourites(): IFavouriteGame[] {
        const data = localStorage.getItem(this.stkey);
        if (data) {
            try {
                return JSON.parse(data);
            } catch (e) {
                console.error('Error parsing favourites from localstorage', e);
            }
        }
        return [];
    }

    private saveFavourites(favourites: IFavouriteGame[]): void {
        localStorage.setItem(this.stkey, JSON.stringify(favourites));
        this.favouritesSubject.next(favourites);
    }

    addFavourite(game: IFavouriteGame): boolean {
        const favourites = this.loadFavourites();

        if (favourites.find(fav => fav.id === game.id)) {
            return false;
        }
        favourites.push(game);
        this.saveFavourites(favourites);
        return true;
    }

    removeFavourite(gameId: number): void {
        const favourites = this.loadFavourites().filter(fav => fav.id !== gameId);
        this.saveFavourites(favourites);
    }

}