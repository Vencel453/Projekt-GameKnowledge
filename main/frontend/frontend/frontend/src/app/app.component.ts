//Szükséges importok beágyazása
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Authservice } from './authservice';
import { CommonModule } from '@angular/common';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule,],      //Ide is a szükséges importok beágyazása
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Jelenleg nem implementált cím beállítása
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  //Figyelőrendszer mely a bejelentkezes állapotát figyeli és tárolja a bejelentkezett felhasználó adatait
  isAuthenticated$: Observable<boolean>;
  user$: Observable<{ username: string; isadmin: boolean} | null>;

  //Minimenu állapotát jelzo változo
  ismenuopen = false;

  //Kontruktor ami injektálja a függőségeket
  constructor (private authService: Authservice, private router: Router) {
    //A bejelentkezés állapotát figyeli az authservice-t használva
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    //Kombinálja az adatokat egy objektummá
    this.user$ = combineLatest([
      this.authService.username$,
      this.authService.isAdmin$,
      this.authService.isAuthenticated$
      //Ha bejelentkezett, visszatér a megfelelő objektummal, máskülönben null
    ]).pipe(
      map(([username, isAdmin, isauthenticated]) =>isauthenticated && username ? {username, isadmin: isAdmin} : null)
    );
    this.isAuthenticated$.subscribe(value => console.log("isAuthenticated$:", value));
  }

  //Minimenu lenyilásáért felel
  menutoggle(){
    this.ismenuopen = !this.ismenuopen;
  }

  //Használva az authservice-t, kijelentkeztet, átnavigál a Kezdolapraés ujratölti az oldalt
  logout(){
    this.authService.logout();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
