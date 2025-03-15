//Szükséges importok
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Standalone komponens definiálása
@Component({
  selector: 'app-dataprotection',
  standalone: true,
  imports: [],
  templateUrl: './dataprotection.component.html',
  styleUrl: './dataprotection.component.css'
})

//Oldal címének beállítása
export class DataprotectionComponent {
  constructor(private title: Title){
    this.title.setTitle('Data Protection');
  }

}
