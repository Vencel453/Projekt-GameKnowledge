import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient, HttpClientModule ,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registForm: FormGroup;
  successmess: string | null = null;
  failuremess: string | null = null;
  http: any;

  constructor(
    private fb: FormBuilder,
    private http2: HttpClient,
    private router: Router){
    this.registForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      passwordAgain: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit(){
    if (this.registForm.valid){
      this.http.post('https://localhost:3000/registration', this.registForm.value)
      .subscribe({
        Headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        next: (response: any) =>{
          if(response.status === 201 && response.body.error === 'false'){
            this.successmess = response.message;
            this.failuremess === null;
            setTimeout(() =>{
              this.router.navigate(['/login']);
            }, 2000);
            this.registForm.reset();
          }else{
            (err: HttpErrorResponse) =>{
              if(err.status === 400){
                switch(err.error.message){
                  case "Not every parameter was filled!":
                    this.failuremess = "Not every parameter was filled!";
                    break;
                  case "The username is not in the correct lenght!":
                    this.failuremess = "The username is not in the correct lenght!";
                    break;
                  case "The passwords don't match!":
                    this.failuremess = "The passwords don't match!";
                    break;
                  case "The password isn't in the correct form!":
                    this.failuremess = "The password isn't in the correct form!";
                    break;
                  case "The email is in incorrect form!":
                    this.failuremess = "The email is in incorrect form!";
                    break;
                }
              }else if(err.status === 409){
                this.failuremess = "There's already a user with this username or email address!";
              }else if(err.status === 500){
                this.failuremess = "Something went wrong while creating an user!";
              }else{
                this.failuremess = "An unexpected error occured.";
              }
              this.successmess = null;
            }
          }
        }
      })
    }
  }
}

