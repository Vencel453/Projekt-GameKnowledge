import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
    games = [
      {name: 'Indiana Jones and the Great Circle', boxart: './indiana.jpg'},
      {name: 'Alien: Rouge Incursion', boxart: './alien.avif'},
      {name: 'Farming Simulator 25', boxart: './farming.avif'},
      {name: 'Marvel Rivals', boxart: './marvel.jpg'},
      {name: 'Stalker 2', boxart: './stalker.jpg'},
      {name: 'Path of Exile 2', boxart: './pathofexile.png'},
      {name: 'FairyTail 2', boxart: './fairytail2.png'},
      {name: 'Antonblast', boxart: './antonblast.png'},
    ];

    leftscroll() {
      const gamelist = document.querySelector('.gamelist') as HTMLElement;
      gamelist.scrollBy({left: -300, behavior: 'smooth'});
    }

    rightscroll(){
      const gamelist = document.querySelector('.gamelist') as HTMLElement;
      gamelist.scrollBy({left: 300, behavior: 'smooth'});
    }
}
