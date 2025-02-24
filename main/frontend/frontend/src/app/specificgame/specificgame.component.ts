import { Component, OnInit } from "@angular/core";
import { GameDetailsService } from "../../gamedetails.service";
import { IGamesDetails } from "../../gamedetails.model";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-game-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './specificgame.component.html',
    styleUrl: './specificgame.component.css'
})
export class SpecificgameComponent implements OnInit {
    gameData!: IGamesDetails;
    showMore = false;
    visibleActors = 4;
    visibleCreators = 3;

    get developerslist(): string {
        return this.gameData?.developers?.map(dev => dev.name).join(', ') || '';
    }

    get publisherslist(): string {
        return this.gameData?.publishers?.map(pub => pub.name).join(', ') || '';
    }

    userRating: number = 0;

    private destroy$ = new Subject<void>();

    constructor(private gameService: GameDetailsService, private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.pipe(
            takeUntil(this.destroy$)
        ).subscribe(params => {
            this.route.params.subscribe(params => {
                const gameId = +params['id'];
                this.gameService.getGamesDetailsByID(gameId).subscribe({
                    next: (response) => {
                        console.log("Backend response: ", response);
                        if (!response.error){
                            this.gameData = response.datas;
                            console.log("gamedata: ", this.gameData);
                        }
                    },
                    error: (err) => {
                        console.error(err);
                    }
        })
            })
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    calculateProgress() {
        return {
            positive: this.gameData.rating + '%',
            negative: (100 - this.gameData.rating) + '%'
        };
    }

    RateGame() {

    }

    AddtoFavourites() {
        
    }
}
