//Szükséges importok
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//standalone komponens definiálása
@Component({
  selector: 'app-homepage',
  standalone: true,
  //Szükséges importok
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
//Implementálja az AfterViewInit interfészt
export class HomepageComponent implements AfterViewInit {

  //Dekorátor, a sablonban lévő gamelist referenciával ellátott elemeket egy query list-be gyüjtjük
    @ViewChildren('gamelist') gamelists!: QueryList<ElementRef>;
    //Dekorátor, a sablonban lévő slideshow referenciával ellátott elemeket lekérjük
    @ViewChildren('slideshow') slideshowElement!: ElementRef;

    activeSlideIndex = 0;   //Az aktuálisan aktív slide indexe a slideshow-ban
    slideshow: any[] = [];  //Slideshow elemek tömbje
    gamescategories: { [key: string]: any[] } = {};   //Objektum melyben kulcs alapján tároljuk a játékokat a kategóriákban

    //Injektáljuk a szükséges szolgáltatásokat
    constructor(private http: HttpClient, private changedetector: ChangeDetectorRef) {}

    //Betöltjük az adatokat
    ngOnInit(){
      this.loadGameData();
    }

    //Lefut a teljes inicializálás után
    ngAfterViewInit(): void {
      //Lekérjük a slideshow DOM elemet a template referenciából
        const carousel = this.slideshowElement.nativeElement;
        //Regisztrálunk egy figyelőt amely minden slide váltásnál lefut
        carousel.addEventListener('slid.bs.carousel', (event: any) => {
          //Frissítjük az éppen aktív slide indexet
          this.activeSlideIndex = event.to;
          //Manuálisan aktiváljuk a változás detektálást hogy az Angular frissítse a nézetet
          this.changedetector.detectChanges();
        });
    }

    //HTTP kérés a játékok adatának betöltéséhez
    loadGameData(){
      this.http.get<any>('http://localhost:3000/')
        .subscribe((response: any) => {
          //Ha nincs hiba akkor betöltjük a játékok adatait a megfelelő kategóriákba
          if(!response.error) {
            const datas = response.datas;
            this.slideshow = response.datas.upcomingGames.map((game: any) =>({
              id: game.id,
              promoArt: game.promoArt,
              title: `Game ${game.id}`,
              release: game.release,
            }));
            this.gamescategories["newReleaseGames"] = response.datas.newReleaseGames.map((game: any) =>({
              id: game.id,
              boxart: game.boxart,
              name: game.gameTitle,
            }));
            this.gamescategories["shooters"] = response.datas.shooters.map((game: any) =>({
              id: game.id,
              boxart: game.boxart,
              name: game.gameTitle,
            }));
            this.gamescategories["adventures"] = response.datas.adventures.map((game: any) =>({
              id: game.id,
              boxart: game.boxart,
              name: game.gameTitle,
            }));
            this.gamescategories["rpgs"] = response.datas.rpgs.map((game: any) =>({
              id: game.id,
              boxart: game.boxart,
              name: game.gameTitle,
            }));
            this.gamescategories["racings"] = response.datas.racings.map((game: any) =>({
              id: game.id,
              boxart: game.boxart,
              name: game.gameTitle,
            }));
            this.gamescategories["strategies"] = response.datas.strategies.map((game: any) =>({
              id: game.id,
              boxart: game.boxart,
              name: game.gameTitle,
            }));
          }else {
            //Hibakezelés
            console.error('Error loading game data', response.messeage);
          }
        });
    }



    //Balra görgetés a megadott lista indexe alapján
    leftscroll(listID: number) {
      const gamelist = this.getgamelistByIndex(listID);
      if(gamelist){
        gamelist.scrollBy({left: -300, behavior: 'smooth'});
      }
    }

    //Jobbra görgetés a megadott lista indexe alapján
    rightscroll(listID: number){
      const gamelist = this.getgamelistByIndex(listID);
      if(gamelist){
        gamelist.scrollBy({left: 300, behavior: 'smooth'});
      }
    }

    //Segédfüggvény amely visszaadja az index alapján a megfelelő játéklista DOM elemét
    private getgamelistByIndex(index: number): HTMLElement | null {
      const gamelistArray = this.gamelists.toArray();
      return gamelistArray[index]?.nativeElement || null;
    }
}
