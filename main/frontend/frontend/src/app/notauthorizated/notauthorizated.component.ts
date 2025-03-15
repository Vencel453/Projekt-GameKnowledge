//Szükséges importok
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Standalone komponens definiálás
@Component({
  selector: 'app-notauthorizated',
  standalone: true,
  imports: [],
  templateUrl: './notauthorizated.component.html',
  styleUrl: './notauthorizated.component.css'
})

//Oldal címének beállítása
export class NotauthorizatedComponent {
  constructor(private title: Title) {
    this.title.setTitle('Not Authorizated');
  }
}
