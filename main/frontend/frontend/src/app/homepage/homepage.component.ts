import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

    upcomingGames: any[] = [];
    newReleasedGames: any[] = [];
    shooters: any[] = [];
    adventures: any[] = [];
    rpgs: any[] = [];
    racings: any[] = [];
    strategies: any[] = [];

    currentSlideIndex: number = 0;

    private slideInterval: any;

    constructor(private gamedataservice: GameDataService){}

    ngOnInit(): void {
      this.gamedataservice.getGameData().subscribe((data) =>{
        this.upcomingGames = data.datas.upcomingGames;
        this.newReleasedGames = data.datas.newReleasedGames;
        this.shooters = data.datas.shooters;
        this.adventures = data.datas.adventures;
        this.rpgs = data.datas.rpgs;
        this.racings = data.datas.racings;
        this.strategies = data.datas.strategies;
      });

      this.startAutoSlide();

    }

    ngOnDestroy(): void {
      if(this.slideInterval) {
        clearInterval(this.slideInterval);
      }
    }
    
    previousSlide(){
      if(this.upcomingGames.length > 0){
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.upcomingGames.length) % this.upcomingGames.length;
      }
    }

    nextSlide(){
      if(this.upcomingGames.length > 0){
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.upcomingGames.length;
      }
    }

    startAutoSlide(){
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }

    scrollLeft(container: HTMLElement){
      container.scrollBy({left: -200, behavior: 'smooth'});
    }

    scrollRight(container: HTMLElement){
      container.scrollBy({left: 200, behavior: 'smooth'});
    }
}