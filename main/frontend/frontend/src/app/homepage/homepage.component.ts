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
