import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient,HttpErrorResponse, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registForm: FormGroup;
  successmess: string | null = null;
  failuremess: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router){
    this.registForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      passwordAgain: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(){
    console.log('Form adatok:', this.registForm.value);
    if (this.registForm.valid){
      this.http.post('https://localhost:3000/registration', this.registForm.value, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        observe: 'response'
      }),
      })
      .subscribe({
        next: (response: any) =>{
          if(response.error === "false"){
            this.successmess = response.message;
            this.failuremess === null;
            setTimeout(() =>{
              this.router.navigate(['/login']);
            }, 2000);
          }
        },
        error:(err: HttpErrorResponse) =>{
            this.successmess = null;
    if(err.status === 400){
      switch (err.error.message){
        case "Not every parameter was filled!":
          this.failuremess = "Not every parameter was filled!";
          break;
        case "The username is not in the correct lenght!":
          this.failuremess = "The username is not in the correct lenght!";
          break;
        case "The passwords don't match!":
          this.failuremess = "The passwords don't match!";
          break;
        case "The password isn't in a correct form!":
          this.failuremess = "The password isn't in the correct form!";
          break;
        case "The email is in incorrect form!":
          this.failuremess = "The email is in incorrect form!";
          break;
        default:
          this.failuremess = "An unexpected error occured. Please try again later.";
      }
    }else if(err.status === 409){
      this.failuremess = "A user with this username or email already exist!";
    }else if(err.status === 500){
      this.failuremess = "A server error occured. Please try again later.";
    }else{
      this.failuremess = "An unexpected error occured.";
    }

    console.error('Error-t megkaptam:', err);
  }
});
    }
  }
}
  /*private handleError(err: HttpErrorResponse){
    if(err.status === 400){
      this.failuremess = err.error.message || 'Validation error occured.';
  }else if(err.status === 409){
    this.failuremess = "There's already a user with this username or email address!";
  }else if(err.status === 500){
    this.failuremess = "Something went wrong while creating an user!";
  }else{
    this.failuremess = 'Unexpected error occured.';
  }
  this.successmess = null;      
    }
  }*/

