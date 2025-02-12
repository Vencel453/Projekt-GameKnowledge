//Szükséges importok beágyazása
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Authservice {
   private isauthenticated = new BehaviorSubject<boolean>(this.hasToken());
   private username = new BehaviorSubject<string | null>(null);
   private isAdmin = new BehaviorSubject<boolean>(false);

   isAuthenticated$ = this.isauthenticated.asObservable();
   username$ = this.username.asObservable();
   isAdmin$ = this.isAdmin.asObservable();

   constructor(){
    this.clearInvalidToken();
    this.loadUserInfo();
    this.isauthenticated.next(this.hasToken());
   }

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

   login(token: string, username: string, isAdmin: boolean){
    console.log("Login funciton called: ", {token, username, isAdmin});
    if (this.isLocalStorageAvailable()){
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
    }

    this.isauthenticated.next(true);
    this.username.next(username);
    this.isAdmin.next(isAdmin);

    window.scrollTo({top: 0, behavior: "smooth"});
   }

   logout(){
    if (this.isLocalStorageAvailable()){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
    }

    this.isauthenticated.next(false);
    this.username.next(null);
    this.isAdmin.next(false);
   }

   getUsername(): string | null {
    return localStorage.getItem('username');
   }

   isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
   }

   private hasToken(): boolean {
    return this.isLocalStorageAvailable() && !!localStorage.getItem('token');
    }

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

private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}
}