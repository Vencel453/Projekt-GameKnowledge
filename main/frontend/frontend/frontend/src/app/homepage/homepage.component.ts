import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

    @ViewChildren('gamelist') gamelists!: QueryList<ElementRef>;

    games1 = [
      {name: 'Indiana Jones and the Great Circle', boxart: './indiana.jpg'},
      {name: 'Alien: Rouge Incursion', boxart: './alien.avif'},
      {name: 'Farming Simulator 25', boxart: './farming.avif'},
      {name: 'Marvel Rivals', boxart: './marvel.jpg'},
      {name: 'Stalker 2', boxart: './stalker.jpg'},
      {name: 'Path of Exile 2', boxart: './pathofexile.png'},
      {name: 'FairyTail 2', boxart: './fairytail2.png'},
      {name: 'Antonblast', boxart: './antonblast.png'},
    ];
    games2 = [
      {name: 'Final Fantasy VII Remake', boxart: './finalfantasy.jpg'},
      {name: 'Metaphor ReFantazio', boxart: './metaphor.jpg'},
      {name: 'Monster Hunter Rise', boxart: './monsterhunter.jpg'},
      {name: 'Persona 3: Reload', boxart: './persona3.png'},
      {name: 'Persona 5 Royale', boxart: './persona5.jpg'},
      {name: 'Pirate Yakuza in Hawaii', boxart: './pirateyakuza.png'},
      {name: 'Shin Megami Tensei 3: Nocturne', boxart: './smtnocturne.png'},
      {name: 'Shin Megami Tensei Vengance', boxart: './smtveng.jpg'},
    ]

    leftscroll(listID: number) {
      const gamelist = this.getgamelistByIndex(listID);
      if(gamelist){
        gamelist.scrollBy({left: -300, behavior: 'smooth'});
      }
    }

    rightscroll(listID: number){
      const gamelist = this.getgamelistByIndex(listID);
      if(gamelist){
        gamelist.scrollBy({left: 300, behavior: 'smooth'});
      }
    }

    private getgamelistByIndex(index: number): HTMLElement | null {
      const gamelistArray = this.gamelists.toArray();
      return gamelistArray[index]?.nativeElement || null;
    }
}
