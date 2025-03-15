//Szükséges importok beágyazása
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { isPlatformBrowser } from "@angular/common";

//Szolgáltatás globálisan elérhető
@Injectable({
    providedIn: 'root'
})

export class Authservice {
    //Felhasználó hitelesítési állapotát tároló változó
   private isauthenticated = new BehaviorSubject<boolean>(this.hasToken());
   private username = new BehaviorSubject<string | null>(null);
   private isAdmin = new BehaviorSubject<boolean>(false);

   //Állapotok figyelése(Admin? Bejelentkezett? Felhasználóneve?)
   isAuthenticated$ = this.isauthenticated.asObservable();
   username$ = this.username.asObservable();
   isAdmin$ = this.isAdmin.asObservable();

   //Függőségek injektálása
   constructor( @Inject(PLATFORM_ID) private platformid: Object, //Platform tipus
   private http: HttpClient,    //HTTP kérésekre használt szolgáltatás
   private snackBar: MatSnackBar){  //Felugró üzenetes ablak

    this.clearInvalidToken();   //Törli az érvénytelen tokent ha van
    this.loadUserInfo();    //Betölti a felhasználói adatokat
    this.isauthenticated.next(this.hasToken()); //Frissíti a bejelentkezési állapotot
   }

   //Érvénytelen token törlése
   private clearInvalidToken() {
    if (typeof window !== 'undefined' && localStorage){
    const token = localStorage.getItem('token');
    if (!token){
        localStorage.removeItem('username');
        localStorage.removeItem('isAdmin');
        this.isauthenticated.next(false);
        this.username.next(null);
        this.isAdmin.next(false);
    }
   }
}

//Bejelentkezés: token és adatok tárolása
   login(token: string, username: string, isAdmin: boolean){
    if (this.isLocalStorageAvailable()){
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
    }

    //Állapotok frissítése
    this.isauthenticated.next(true);
    this.username.next(username);
    this.isAdmin.next(isAdmin);

    //Görgetés az oldal tetejére bejelentkezés után
    window.scrollTo({top: 0, behavior: "smooth"});
   }

   //Kijelentkezés: token és adatok törlése
   logout(){
    if (this.isLocalStorageAvailable()){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
    }

    //Állapotok visszaállítása
    this.isauthenticated.next(false);
    this.username.next(null);
    this.isAdmin.next(false);


   }

   //Felhasználónév lekérése
   getUsername(): string | null {
    return localStorage.getItem('username');
   }

   //Be van e jelentkezve?
   isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
   }

   //Van token?
   private hasToken(): boolean {
    return this.isLocalStorageAvailable() && !!localStorage.getItem('token');
    }

    //Betölti az adatokat (név és admin státusz)
   private loadUserInfo() {
        if(this.isLocalStorageAvailable()){
    const storedUsername = localStorage.getItem('username');
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';

    if (storedUsername) {
        this.username.next(storedUsername);
        this.isAdmin.next(storedIsAdmin);
        this.isauthenticated.next(true);
    }
   }
}

//Felhasználónév frissítése
setUsername(newUsername: string): void {
    if(this.isLocalStorageAvailable()){
        localStorage.setItem('username', newUsername);
    }
    this.username.next(newUsername);
}

//Felhasználói fiók törlése
deleteAccount(): Observable<{error: boolean; message: string}>{
    return this.http.delete<{error: boolean; message: string}>('http://localhost:3000/myprofile');
}

//Ellenőrzi hogy létezik e a localstorage(szerver oldalon nem elérhető)
private isLocalStorageAvailable(): boolean {
    return isPlatformBrowser(this.platformid) && typeof localStorage !== 'undefined';
}


}