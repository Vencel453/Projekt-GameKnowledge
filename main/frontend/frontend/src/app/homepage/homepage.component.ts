import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response, Router } from 'express';
import { release } from 'os';
import { Routes, RouterModule } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

    @ViewChildren('gamelist') gamelists!: QueryList<ElementRef>;

    slideshow: any[] = [];
    games: any = [];

    constructor(private http: HttpClient) {}

    ngOnInit(){
      this.loadGameData();
    }

    loadGameData(){
      this.http.get<any>('http://localhost:3000/')
        .subscribe((response: any) => {
          if(!response.error) {
            const datas = response.datas;
            this.slideshow = response.datas.upcomingGames.map((game: any) =>({
              id: game.id,
              promoArt: game.promoArt,
              title: `Game ${game.id}`,
              release: game.release,
            }));

            this.games = response.datas.newReleaseGames.map((game: any) =>({
              id: game.id,
              boxart: game.boxart,
              name: game.gameTitle,
            }));
          }else {
            console.error('Error loading game data', response.messeage);
          }
        });
    }



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
