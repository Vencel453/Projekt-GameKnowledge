import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notauthorizated',
  standalone: true,
  imports: [],
  templateUrl: './notauthorizated.component.html',
  styleUrl: './notauthorizated.component.css'
})
export class NotauthorizatedComponent {
  constructor(private title: Title) {
    this.title.setTitle('Not Authorizated');
  }
}
