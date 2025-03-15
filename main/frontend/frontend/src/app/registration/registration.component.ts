//Szükséges modulok
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient,HttpErrorResponse, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

//Standalone komponens definiálása
@Component({
  selector: 'app-registration',
  standalone: true,
  //Szükséges importok
  imports: [CommonModule, RouterModule,ReactiveFormsModule, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  //Állapotváltozók és formGroup
  registForm: FormGroup;
  success: string | null = null;
  failure: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private title: Title){
      //Oldalcím beállítása
    this.title.setTitle('Registration');
    //Regisztrációs form inicializálása
    this.registForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      passwordAgain: ['']
    });
  }

  //Beküldés
  onSubmit(){
    //Csak ha valid akkor
    if (this.registForm.valid){
      this.http.post('http://localhost:3000/registration', this.registForm.value, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      //Teljes HTTP válasz fogadása
      observe: 'response' as 'body'
      })
      .subscribe({
        next: (response: any) =>{
          //Sikeres válasz
          if(response.status === 201){
            this.success = response.message;
            this.failure === null;
            
            //Átirányítás a bejelentkező oldalra
            setTimeout(() =>{
              this.router.navigate(['/login']);
            }, 2000);
          }
        },
        //Hibák kezelése és a felhasználó értesítése
        error:(err: HttpErrorResponse) =>{
            this.success = null;
    if(err.status === 400){
      switch (err.error.message){
        case "Not every field was filled!":
          this.failure = "Not every field was filled!";
          break;
        case "The username is not in the correct length or contains space!":
          this.failure = "The username must be minimum 5, and maximum 30 characters lenght, and must not contain spaces!";
          break;
        case "The passwords don't match!":
          this.failure = "The passwords don't match!";
          break;
        case "The password is in incorrect form!":
          this.failure = "The password must be minimum 10, maximum 30 characters lenght, and must contain 1 capital letter and 1 number!";
          break;
        case "The email is in incorrect form!":
          this.failure = "The email is in incorrect form!";
          break;
        case "The username contains profanity!":
          this.failure = "The username must not contains any profanity!";
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
    //Legörgetés a hibaüzenethez
    setTimeout(() => {
      if (this.failure) {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
      }
    }, 0);
  }
});
    }
  }
}


