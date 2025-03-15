//Szükséges importok
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Standalone komponens definiálása
@Component({
  selector: 'app-socialmedia',
  standalone: true,
  imports: [],
  templateUrl: './socialmedia.component.html',
  styleUrl: './socialmedia.component.css'
})
//Oldal címének beállítása
export class SocialmediaComponent {
  constructor(private title: Title){
    this.title.setTitle('UNDER CONSTRUCTION');
  }

}
