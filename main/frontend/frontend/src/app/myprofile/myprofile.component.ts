//Szükséges importok
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyprofileService } from '../datamodifier.service';
import { MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar'; 
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Authservice } from '../authservice';

//Adatok interface-e
interface UserResponse {
  error: boolean;
  message: string;
  user: {
    username: string;
    email: string;
    creation: string;
  };
  
}

//Standalone komponens definíció
@Component({
  selector: 'app-myprofile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule, HttpClientModule],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnInit {
   user: any; //Adatok tárolása
   profileForm: FormGroup;  //Profil űrlap konténer

   constructor(
    private profileService: MyprofileService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private title: Title,
    private authservice: Authservice,
    @Inject(PLATFORM_ID) private platformid: Object
   ) {
    this.title.setTitle('My Profile');  //Oldal cím beállítása
    
    //Űrlap inicializálása egyéni validátorokkal
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
      passwordAgain: ['',]
    }, {validators: this.passwordMatchDetector });
   }

   ngOnInit(): void {

    //Session ellenőrzés
    if (!this.authservice.isLoggedIn()){
      this.snackBar.open('Your session is over, please login again!', 'Close', {duration: 10000, panelClass: 'custombar'});
      this.authservice.logout();
    }

    //Csak böngészőben fut a kód?
    if (isPlatformBrowser(this.platformid)){
      setTimeout(() => {
        this.fetchTheData();
      }, 0);
    }
   }

   //Felhasználói adatok lekérése
   fetchTheData() {
    this.profileService.getUser().subscribe({
      next: (response: UserResponse) =>{
        if (!response.error) {
          this.user = response.user;
          this.profileForm.patchValue({
            username: this.user.username
          });
        }else {
          this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: ['custombar']});
        }
      },
      error: () => {
        this.snackBar.open('Something went wrong during the data fetching or your session is over. Please login again!', 'Close', {duration: 10000, panelClass: ['custombar']});
        this.authservice.logout();
      }
    });
   }

   //Jelszó egyező ellenörző
   passwordMatchDetector(form: FormGroup) {
    const password = form.get('password')?.value;
    const passwordAgain = form.get('passwordAgain')?.value;

    if(password && !passwordAgain) {
      return {passwordRequired: true};
    }

    if(password !== passwordAgain){
      return {passwordNotMatch: true};
    }

    return null;
   }

   //Űrlap beküldése, jelszó egyezés és jelszó mező üresen hagyása ellenőrzés
   onSubmit() {
    if (this.profileForm.hasError('passwordRequired')) {
      this.snackBar.open('Please, fill correctly the form!', 'Close', {duration: 10000, panelClass: ['custombar']});
      return;
    }

    if (this.profileForm.hasError('passwordNotMatch')){
      this.snackBar.open('Passwords not match!', 'Close', {duration: 10000, panelClass: ['custombar']});
      return;
    }

    this.profileService.updateData(this.profileForm.value).subscribe({
      next: (response: UserResponse) => {
        if (!response.error) {
          this.authservice.setUsername(this.profileForm.get('username')?.value);
          this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: ['custombar']});
          this.fetchTheData();
        }else{
          this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: ['custombar']});
        }
      },

      //Hibák kezelése
      error: (error) => {
        let message = "There's an error with updating your datas!";

        if(error.status === 404) {
          message = "The token is missing or fautly!";
        }else if (error.status === 409) {
            switch (error.error.message) {
              case "There's already an user with this username!":
                message = "This username is already taken!";
                break;
              case "There's already an user with this e-mail address!":
                message = "This e-mail is already in use!";
                break;
              case "The username is the same as the original!":
                message = "The username must be different from the current one!";
                break;
              case "The e-mail is the same as the original!":
                message = "The e-mail must be different from the current one!";
                break;
              case "The password is the same as the original!":
                message = "The new password must be different from the old one!";
                break;
            }
        }else if (error.status === 400){
          switch (error.error.message) {
            case "The username is not in the correct length or contains space!":
              message = "Username length must be minimum 5, maximum 30 characters and must not contain space!";
              break;
            case "The password confirmation is empty!":
              message = "Please confirm your password!";
              break;
            case "The password is in incorrect form!":
              message = "Invalid password format!";
              break;
            case "The passwords dont't match!":
              message = "Passwords do not match!";
              break;
            case "The password field is empty while the password again is not!":
              message = "Password field cannot be empty if the password confirmation isn't empty either!"
              break;
            case "Every field is empty!":
              message = "You must modify at least 1 field if you want to modify!";
              break;
            case "The email is in incorrect form!":
              message = "The e-mail must contain at least one '@' and one '.' character!";
              break;
            case "The username contains profanity!":
              message = "The username must not contains any profanity!";
              break;
          }
        } else if (error.status === 500) {
          message = "Something went wrong fetching the user's data!";
        }

        this.snackBar.open(message, 'Close', {duration: 10000, panelClass: ['custombar']});
      }
    });
   }

}
