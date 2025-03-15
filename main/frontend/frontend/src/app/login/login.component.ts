//Szükséges importok
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Authservice } from '../authservice';
import { Title } from '@angular/platform-browser';

//Standalone komponens definiálása
@Component({
  selector: 'app-login',
  standalone: true,
  //Szükséges importok
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //Belső változók definiálása
errormess: string = '';
successmess: string = '';
username: string = '';
password: string = '';

//Sablonból lekérünk egy elemet amelynek a referenciáját később felhasználjuk
@ViewChild('errormess') errorMess!: ElementRef;

//Injektáljuk a szolgáltatásokat
constructor(private http: HttpClient, private router: Router, private authService: Authservice, private title: Title){
  //Beállitjuk az oldal címét
  this.title.setTitle('Login');
}

//Űrlap beküldése
onSubmit(): void {
    this.http.post<any>(`http://localhost:3000/login`, {
      username: this.username,
      password: this.password
    })
    .subscribe({
      next: (response) =>{
        //Sikeres válasz
        if(response.error === 'false'){
          this.successmess = response.message;
          //Adatok és token beállítása
          this.authService.login(response.token, this.username, response.isAdmin);
          //navigáció a kezdőlapra
          this.router.navigate(['/']);
        }
      },
      //Hibakezelés
      error: (err) => {
        if(err.status === 400){
          this.errormess = err.error.message;
        }else if(err.status === 500){
          this.errormess = err.error.message
        }else{
          this.errormess = 'An unknown error occured!';
        }
        //Ha van hibaüzenet akkor oda ugor az oldal
        setTimeout(() => {
          if (this.errormess) {
            window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
          }
        }, 0);
      },
    });
  }
}
