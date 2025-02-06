import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface UserResponse {
  error: boolean;
  message: string;
  user: {
    username: string;
    emial: string;
    creation: string;
  };
  
}

@Component({
  selector: 'app-myprofile',
  standalone: true,
  imports: [],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnInit {
    user: UserResponse['user'] | null = null;
    passwordForm: FormGroup;

    constructor(private http: HttpClient, private fb: FormBuilder) {
      this.passwordForm = this.fb.group({
        
      })
    }
}
