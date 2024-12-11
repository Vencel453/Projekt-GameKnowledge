import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
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
  success: string | null = null;
  failure: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router){
    this.registForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      passwordAgain: ['']
    });
  }

  onSubmit(){
    console.log('Form adatok:', this.registForm.value);
    if (this.registForm.valid){
      this.http.post('https://localhost:3000/registration', this.registForm.value, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'body'
      })
      .subscribe({
        next: (response: any) =>{
          if(response.error === "false"){
            this.success = response.message;
            this.failure === null;
            setTimeout(() =>{
              this.router.navigate(['/login']);
            }, 2000);
          }
        },
        error:(err: HttpErrorResponse) =>{
            this.success = null;
    if(err.status === 400){
      switch (err.error.message){
        case "Not every parameter was filled!":
          this.failure = "Not every parameter was filled!";
          break;
        case "The username is not in the correct length!":
          this.failure = "The username is not in the correct length!";
          break;
        case "The passwords don't match!":
          this.failure = "The passwords don't match!";
          break;
        case "The password isn't in a correct form!":
          this.failure = "The password isn't in the correct form!";
          break;
        case "The email is in incorrect form!":
          this.failure = "The email is in incorrect form!";
          break;
        default:
          this.failure = "An unexpected error occured. Please try again later.";
      }
    }else if(err.status === 409){
      this.failure = "A user with this username or email already exist!";
    }else if(err.status === 500){
      this.failure = "A server error occured. Please try again later.";
    }else{
      this.failure = "An unexpected error occured.";
    }

    console.error('Error:', err);
  }
});
    }
  }
}

