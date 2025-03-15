//Szükséges importok beágyazása
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Authservice } from './authservice';
import { CommonModule } from '@angular/common';
import { combineLatest, debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { map } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Searchresults, SearchService } from '../search.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, ReactiveFormsModule],      //Ide is a szükséges importok beágyazása
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  @ViewChild('navBar') navBar!: ElementRef; //Nav. sáv referenciájának a tárolása, szükséges hogy a menuk-ből való kikattintás a bezárásukat vonja maguk után

  searchControl = new FormControl('');  //Keresősáv vezérlője
  searchResults: Searchresults[] = [];  //A keresési találatok tömbje

  //Figyelőrendszer mely a bejelentkezes állapotát figyeli és tárolja a bejelentkezett felhasználó adatait
  isAuthenticated$: Observable<boolean>;
  user$: Observable<{ username: string; isadmin: boolean} | null>;

  //Minimenu állapotát jelzo változo
  ismenuopen = false;

  //Kontruktor ami injektálja a függőségeket
  constructor (private authService: Authservice, 
    private router: Router, 
    private searchservice: SearchService,
    private snackBar: MatSnackBar) {
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

  //Figyeli a keresőmező változásait és egy kis késleltetést állít be
  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()  //Csak akkor fut le, ha ténylegesen van változás
    ).subscribe(query => {
      if (query && query.trim().length > 0) { //Használja a searchService-t és elvégzi a keresési lekérdezést
        this.searchservice.searchGames(query.trim()).subscribe(response => {
          if (!response.errro && response.game) {
            this.searchResults = response.game; //Menti az eredményeket
          } else {
            this.searchResults = [];  //Visszaad egy üres tömböt ha nincs eredmény
          }
        });
      } else {
        this.searchResults = [];  //Ha üres a keresési mező akkor töröljük a találatokat
      }
    });
  }

  //Kiválasztja a legeslegelső találatot és ránavigál
  selectfirstresult(): void {
    if (this.searchResults.length > 0) {
      this.router.navigate(['/game', this.searchResults[0].id]);
    }
  }

  //Egy adott találat kiválasztása és navigálása
  selectresult(result: Searchresults): void {
    this.router.navigate(['/game', result.id]);
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

  //Felhasználói fiók törlése az Authservice szolgáltatást használva
  deleteAccount(): void {
    this.authService.deleteAccount().subscribe({
      next: res => {
        if(!res.error) {
          this.snackBar.open('Account has been deleted!', 'Close', {duration: 10000, panelClass: 'custombar'});
          this.logout();
        }else{
          this.snackBar.open('Something went wrong with deleting your account!', 'Close', {duration: 10000, panelClass: 'custombar'});
        }
      }
    });
  }
//Egy metodus amely a megnyitott minimenu valamint a megnyitott keresesi talaltok bezarasaert felel
  closeMenus(): void {
    this.ismenuopen = false;
    this.searchResults = [];
  }
//Ez figyeli hogy mikor tortenik olyan eger kattintas amely a megnyilt minimenu vagy keresesi talalatok hatókörén kivul történik, és ha történik ilyen akkor meghivja a closemenu() metodust
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if(this.navBar && !this.navBar.nativeElement.contains(event.target)){
      this.closeMenus();
    }
  }
}
