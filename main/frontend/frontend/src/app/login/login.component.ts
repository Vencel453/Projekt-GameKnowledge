import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errormes = '';

  constructor(private authservice: AuthService, private router: Router){}

  onLogin(): void{
    this.authservice.login(this.username, this.password).subscribe({
      next: (response) => {
        if(!response.error){
          this.authservice.saveToken(response.token);
          this.router.navigate(['/']);
      }
    },
    error: (error) =>{
      if(error.status === 400){
          if(error.error.message === 'The username or password is incorrect'){
            this.errormes = 'The username or password is incorrect!';
          }else if(error.error.message === 'Not every field is filed'){
            this.errormes = 'Not every field is filled!';
          }
      }else if(error.status === 500){
        this.errormes = 'An error occured during the login. Please try again later!';
      }else{
        this.errormes = 'An unknown error occured.';
      }
    }
  });
  }
}
