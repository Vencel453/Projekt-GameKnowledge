import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyprofileService } from '../datamodifier.service';
import { MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar'; 
import { CommonModule } from '@angular/common';

interface UserResponse {
  error: boolean;
  message: string;
  user: {
    username: string;
    email: string;
    creation: string;
  };
  
}

@Component({
  selector: 'app-myprofile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule, HttpClientModule],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnInit {
   user: any;
   profileForm: FormGroup;

   constructor(
    private profileService: MyprofileService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
   ) {
    this.profileForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      passwordAgain: ['', Validators.required]
    });
   }

   ngOnInit(): void {
     this.fetchTheData();
   }

   fetchTheData() {
    this.profileService.getUser().subscribe({
      next: (response: UserResponse) =>{
        if (!response.error) {
          this.user = response.user;
          this.profileForm.patchValue({
            username: this.user.username,
            email: this.user.email
          });
        }else {
          this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: ['custombar'], horizontalPosition: 'center'});
        }
      },
      error: () => {
        this.snackBar.open('Something went wrong during the data fetching!', 'Close', {duration: 10000, panelClass: ['custombar'], horizontalPosition: 'center'});
      }
    });
   }

   onSubmit() {
    if (this.profileForm.invalid) {
      this.snackBar.open('Please, fill correctly the form!', 'Close', {duration: 10000, panelClass: ['custombar'], horizontalPosition: 'center'});
      return;
    }

    this.profileService.updateData(this.profileForm.value).subscribe({
      next: (response: any) => {
        console.log(this.profileForm.value);
        if (!response.error) {
          this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: ['custombar'], horizontalPosition: 'center'});
          this.fetchTheData();
        }else{
          this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: ['custombar'], horizontalPosition: 'center'});
        }
      },
      error: () => {
        this.snackBar.open("There's an error with the update of the datas!", 'Close', {duration: 10000, panelClass: ['custombar'], horizontalPosition: 'center'});
      }
    });
   }

}
