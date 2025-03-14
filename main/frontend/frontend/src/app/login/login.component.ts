import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Authservice } from '../authservice';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
errormess: string = '';
successmess: string = '';
username: string = '';
password: string = '';

@ViewChild('errormess') errorMess!: ElementRef;

constructor(private http: HttpClient, private router: Router, private authService: Authservice, private title: Title){
  this.title.setTitle('Login');
}

onSubmit(): void {
    this.http.post<any>(`http://localhost:3000/login`, {
      username: this.username,
      password: this.password
    })
    .subscribe({
      next: (response) =>{
        if(response.error === 'false'){
          this.successmess = response.message;
          this.authService.login(response.token, this.username, response.isAdmin);
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        if(err.status === 400){
          this.errormess = err.error.message;
        }else if(err.status === 500){
          this.errormess = err.error.message
        }else{
          this.errormess = 'An unknown error occured!';
        }
        setTimeout(() => {
          if (this.errormess) {
            window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
          }
        }, 0);
      },
    });
  }
}
