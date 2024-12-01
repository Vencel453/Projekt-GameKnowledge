import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registForm: FormGroup;
  successmess: string | null = null;
  failuremess: string | null = null;
  http: any;

  constructor(private fb: FormBuilder){
    this.registForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      passagain: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    if (this.registForm.valid){
      this.http.post('https://localhost:3000', this.registForm.value)
      .subscribe({
        next: (response: any) =>{
          if(response.status === 'success'){
            this.successmess = response.message;
            this.registForm.reset();
          }else if(response.status === 'error'){
              this.failuremess = response.message;
              this.successmess = null;
          }
        }
      })
    }
  }
}

