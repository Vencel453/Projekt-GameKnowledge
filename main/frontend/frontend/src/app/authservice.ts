//Szükséges importok beágyazása
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import {jwtDecode} from 'jwt-decode';
import { isPlatformBrowser } from "@angular/common";

interface TokenPayLoad {
    expire: number;
}

@Injectable({
    providedIn: 'root'
})

export class Authservice {
   private isauthenticated = new BehaviorSubject<boolean>(this.hasToken());
   private username = new BehaviorSubject<string | null>(null);
   private isAdmin = new BehaviorSubject<boolean>(false);
   private logouttimer: any = null;

   isAuthenticated$ = this.isauthenticated.asObservable();
   username$ = this.username.asObservable();
   isAdmin$ = this.isAdmin.asObservable();

   constructor( @Inject(PLATFORM_ID) private platformid: Object, private http: HttpClient, private snackBar: MatSnackBar){
    this.clearInvalidToken();
    this.loadUserInfo();
    this.isauthenticated.next(this.hasToken());
    this.checkRefreshToken();
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
    console.log("Token recieved: ", token);
    if (this.isLocalStorageAvailable()){
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
    }

    this.isauthenticated.next(true);
    this.username.next(username);
    this.isAdmin.next(isAdmin);
    this.AutoLogout(token);

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

    if (this.logouttimer){
        clearTimeout(this.logouttimer);
    }
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
    return isPlatformBrowser(this.platformid) && typeof localStorage !== 'undefined';
}

private AutoLogout(token: string) {
    try{
        const decoded: TokenPayLoad = jwtDecode(token);
        const expiration = new Date(decoded.expire * 1000);
        const now = new Date();
        const expiresin = expiration.getTime() - now.getTime();

        if (expiresin <= 0){
            this.snackBar.open("You're current session is over! Please login again!", "Close", {duration: 10000});
            this.logout();
        } else {
            this.logouttimer = setTimeout(() => {
                this.snackBar.open("You're current session is over! Please login again!", "Close", {duration: 10000});
                this.logout();
            }, expiresin);
        }
    } catch (error) {
        console.error("Token decoding problem!", error);
        this.logout();
    }
}

private checkRefreshToken() {
    if (!this.isLocalStorageAvailable()) return;
    
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
        const decoded: TokenPayLoad = jwtDecode(token);
        const expiration = new Date(decoded.expire * 1000);
        const now = new Date();
        const remaining = expiration.getTime() - now.getTime();

        if (remaining < 30 * 60 * 1000){
            this.checkRefreshToken();
        }else {
            this.AutoLogout(token);
        }
    } catch (error) {
        console.error("Token decoding problem 2!", error);
        this.logout();
    }
}

private refreshToken() {
    this.http.post<{token: string}>('http://localhost:4200', {})
    .subscribe({
        next: (res) => {
            const newToken = res.token;
            if (newToken && this.isLocalStorageAvailable()){
                localStorage.setItem('token', newToken);
                this.AutoLogout(newToken);
            }
        },
        error: (err) => {
            console.error("Token refresh failure!", err);
            this.logout();
        }
    });
}
}