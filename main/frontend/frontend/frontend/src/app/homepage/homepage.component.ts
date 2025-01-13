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
      {name: 'Rainbow Six Siege', boxart: './rainbow.jpeg'},
      {name: 'Overwatch 2', boxart: './overwatch2.jpg'},
      {name: 'RoboCop: Rouge City', boxart: './robocop.png'},
      {name: 'Valorant', boxart: './valorant.png'},
      {name: 'Cyberpunk 2077', boxart: './cyberpunk.png'},
      {name: 'Call of Duty: Black Ops 6', boxart: './cod.png'},
      {name: 'Bodycam', boxart: './bodycam.png'},
      {name: 'Counter Strike 2', boxart: './csgo.jpg'},
      {name: 'High on Life', boxart: './highonlife.jpg'}
    ];
    games3 = [
      {name: 'Hogwarts Legacy', boxart: './hogwarts.avif'},
      {name: 'Cyberpunk 2077', boxart: './cyberpunk.png'},
      {name: 'Tomb Raider', boxart: './tombraider1.jpg'},
      {name: 'Rise of the Tomb Raider', boxart: './tombraider2.png'},
      {name: 'Shadow of the Tomb Raider', boxart: './tombraider3.jpg'},
      {name: 'Until Dawn', boxart: './untildawn.png'},
      {name: 'Minecraft', boxart: './minecraft.png'},
      {name: 'Red Dead Redemption', boxart: './reddead.jpg'},
      {name: 'Red Dead Redemption 2', boxart: './reddead2.jpg'}
    ];
    games4 = [
      {name: 'The Witcher', boxart: './witcher1.jpg'},
      {name: 'Cyberpunk 2077', boxart: './cyberpunk.png'},
      {name: 'The Witcher 2: Assasins of the kings', boxart: './witcher2.jpg'},
      {name: 'The Witcher 3: Wild Hunt', boxart: './witcher3.jpg'},
      {name: 'Stardew Valley', boxart: './stardew.jpg'},
      {name: 'Mass Effect Legendary Edition', boxart: './masseffect.jpg'},
      {name: 'Elden Ring', boxart: './eldenring.jpg'},
      {name: 'Black Myth Wukong', boxart: './blackmyth.jpg'},
      {name: 'Baldur\'s Gate 3', boxart: './baldursgate.png'}
    ];
    games5 = [
      {name: 'Forza Horizon 4', boxart: './forza4.png'},
      {name: 'Forza Horizon 5', boxart: './forza5.jpg'},
      {name: 'Forza Motorsports', boxart: './forzamotor.jpeg'},
      {name: 'Need for Speed Carbon', boxart: './nfscarbon.png'},
      {name: 'Need for Speed Heat', boxart: './nfsheat.png'},
      {name: 'Need for Speed Most Wanted', boxart: './nfsmost.jpg'},
      {name: 'Need for Speed Undercover', boxart: './nfsundercover.jpg'},
      {name: 'Need for Speed Underground', boxart: './nfsunderground.jpg'},
      {name: 'Need for Speed Underground 2', boxart: './nfsunderground2.png'}
    ];
    games6 = [
      {name: 'Planetary Annihilation', boxart: './planetan.png'},
      {name: 'Shin Megami Tensei', boxart: './smt1.jpg'},
      {name: 'Shin Megami Tensei 2', boxart: './smt2.jpg'},
      {name: 'Starcraft', boxart: './starcraft.jpg'},
      {name: 'Starcraft 2', boxart: './starcraft2.png'},
      {name: 'Total Annihilation', boxart: './ta.png'},
      {name: 'Xcom 2', boxart: './XCOM2.jpg'},
      {name: 'Defense the Grid', boxart: './defensethegrid.jpg'},
      {name: 'Chrono Trigger', boxart: './chrono.png'}
    ];

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
