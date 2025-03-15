//Szükséges importok
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Standalone komponens definiálása
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})

//Oldal címének beállítása
export class PageNotFoundComponent {

  constructor(private title: Title){
    this.title.setTitle('Page Not Found');
  }

}
