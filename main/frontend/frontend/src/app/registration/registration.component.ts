import { Component } from '@angular/core';

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
}

