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

    userRating: number = 0;

    private destroy$ = new Subject<void>();

    private ratingLogoMap: { [inst: string]: { [rating: string]: string}} = {
        PEGI: {
            '3': 'pegi_3.png',
            '7': 'pegi_7.png',
            '12': 'pegi_12.png',
            '16': 'pegi_16.png',
            '18': 'pegi_18.png'
        },
        ESRB: {
            'E': 'esrb_everyone.png',
            'E10+': 'esrb_everyone10.png',
            'T': 'esrb_teen.png',
            'M': 'esrb_mature.png',
            'AO': 'esrb_adultsonly.png',
            'RP': 'esrb_ratingpending.png'
        },
        CERO: {
            'A': 'cero_A.png',
            'B': 'cero_B.png',
            'C': 'cero_C.png',
            'D': 'cero_D.png',
            'Z': 'cero_Z.png',
        }
    };

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

    getAgeratingIcon(agerating: {institution: string, rating: string}): string {
        const inst = agerating.institution.toUpperCase();
        const rate = agerating.rating;

        if(this.ratingLogoMap[inst]?.[rate]) {
            return `/public/pictures/ageratings/${this.ratingLogoMap[inst][rate]}`;
        }else{
            return '/public/pictures/ageratings/default.png';
        }
    }

    RateGame() {

    }

    AddtoFavourites() {
        
    }
}
