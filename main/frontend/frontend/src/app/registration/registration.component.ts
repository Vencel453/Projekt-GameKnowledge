import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { response } from 'express';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';
  passagain: string = '';
  email: string = '';

  constructor(private authservice: AuthService){ }

  onsub(): void {
    const userData = { username: this.username, password: this.password, passagain: this.passagain, email: this.email};

    this.authservice.regist(userData).subscribe({
      next: (response) => {
        console.log('Registration Success', response);
        alert()
      }
    })
  }
}

