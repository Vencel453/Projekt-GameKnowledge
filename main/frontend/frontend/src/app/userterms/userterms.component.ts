//Szükséges importok
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Standalone komponens definiálása
@Component({
  selector: 'app-userterms',
  standalone: true,
  imports: [],
  templateUrl: './userterms.component.html',
  styleUrl: './userterms.component.css'
})
//Az ablakban megjelenő cím beállítása
export class UsertermsComponent {
  constructor(private title: Title){
    this.title.setTitle('Use of Terms');
  }

}
