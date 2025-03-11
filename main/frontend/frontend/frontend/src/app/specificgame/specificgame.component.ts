import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { GameDetailsService } from "../../gamedetails.service";
import { IGamesDetails } from "../../gamedetails.model";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Authservice } from "../authservice";
import { MatSnackBar } from '@angular/material/snack-bar';
import { RatingwindowComponent } from "../ratingwindow/ratingwindow.component";
import { FavouritesService } from "../../favourite.service";
import { PictureNotFoundDirective } from "../../picturenotfound.directive";
import { ReviewsComponent } from "../reviews/reviews.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-game-details',
    standalone: true,
    imports: [CommonModule, MatDialogModule, PictureNotFoundDirective, ReviewsComponent, FormsModule],
    templateUrl: './specificgame.component.html',
    styleUrl: './specificgame.component.css'
})
export class SpecificgameComponent implements OnInit {
    gameData!: IGamesDetails;

    selectedImg: string | null = null;

    showFullFourthSection = false;
    visibleVlanguages = 5;
    visibleSlanguages = 5;
    visiblePlatforms = 3;

    showAllCrew = false;
    visibleCrew = 5;

    languageFlagMap: {[key: string]: string} = {
        'english': './united-kingdom.png',
        'french': './france.png',
        'german': './germany.png',
        'hungarian': './hungary.png',
        'japanese': './japan.png',
        'italian': './italy.png',
        'polish': './poland.png',
        'portuguese': './portugal.png',
        'russian': './russia.png',
        'korean': './south-korea.png',
        'spanish': './spain.png',
        'la spanish': './spain.png',
        'thai': './thailand.png',
        'turkish': './turkey.png',
        'ukrainian': './ukraine.png',
        'arabian': './united-arab-emirates.png',
        'czech': './czech-republic.png',
        'simplified chinese': './china.png',
        'traditional chinese': './china.png'
    };

    userRating: number = 0;

    voicesLanguages: string[] = [];
    subtitlesLanguages: string[] = [];


    get developerslist(): string {
        return this.gameData?.developers?.map(dev => dev.name).join(', ') || '';
    }

    get publisherslist(): string {
        return this.gameData?.publishers?.map(pub => pub.name).join(', ') || '';
    }

    get displayedVlanguages() {
        return this.showFullFourthSection ? this.voicesLanguages : this.voicesLanguages.slice(0, this.visibleVlanguages);
    }

    get displayedSlanguages() {
        return this.showFullFourthSection ? this.subtitlesLanguages : this.subtitlesLanguages.slice(0, this.visibleSlanguages);
    }

    get displayedPlatforms(){
        if (!this.gameData?.platforms) return [];
        return this.showFullFourthSection ? this.gameData.platforms : this.gameData.platforms.slice(0, this.visiblePlatforms);
    }

    get displayedCrossException(){
        if(!this.gameData?.crossPlatformException) return '';
        const text = this.gameData.crossPlatformException;
        return this.showFullFourthSection || text.length <= 100 ? text : text.slice(0, 100) + '...';
    }

    get platformsCount(): number {
        return this.gameData?.platforms?.length ?? 0;
    }

    get displayedCrew() {
        if (!this.gameData?.creators) {
            return [];
        }
        return this.showAllCrew ? this.gameData.creators : this.gameData.creators.slice(0, this.visibleCrew);
    }

    get hasRecommendedSpecs(): boolean {
        if (!this.gameData.pcspec) return false;

        return !!this.gameData.pcspec.op ||
        !!this.gameData.pcspec.cpu ||
        !!this.gameData.pcspec.ram ||
        !!this.gameData.pcspec.gpu ||
        !!this.gameData.pcspec.directx;
    }

    toggleFourthSection(): void {
        this.showFullFourthSection = !this.showFullFourthSection;
    }

    toggleCrew(): void {
        this.showAllCrew = !this.showAllCrew;
    }

    openIMG(imageURL: string): void {
        this.selectedImg = imageURL;
    }

    closeIMG(): void {
        this.selectedImg = null;
    }

    private destroy$ = new Subject<void>();

    constructor(private gameService: GameDetailsService, private route: ActivatedRoute, private ratewindow: MatDialog, private authservice: Authservice, private snackBar: MatSnackBar, private favouriteService: FavouritesService){}

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
                            if(this.gameData.languages?.length){
                                this.voicesLanguages = this.gameData.languages
                                .filter(lang => lang['Games.Gameslanguage.dub'] === 1)
                                .map(lang => lang.language);

                                this.subtitlesLanguages = this.gameData.languages
                                .filter(lang => lang['Games.Gameslanguage.dub'] === 0)
                                .map(lang => lang.language);
                            }
                        }
                    },
                    error: (err) => {
                        console.error(err);
                    }
        })
            })
        });
    }

    @ViewChild('castContainer', {read: ElementRef}) castContainer!: ElementRef;

    scrollCast(direction: string): void {
        const container = this.castContainer.nativeElement;
        const scrollAmount = 300;
        if (direction === 'left'){
            container.scrollBy({left: -scrollAmount, behaivor: 'smooth'});
        }else if (direction === 'right'){
            container.scrollBy({left: scrollAmount, behaivor: 'smooth'});
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    get ratingProgress() {
        if (this.gameData.rating == null) return null;
        return {
            positive: `${this.gameData.rating}%`,
            negative: `${100 - this.gameData.rating}%`
        };
    }

    isRatingWindowOpen = false;

    RateGame(): void {
        if (!this.authservice.isLoggedIn()) {
            this.snackBar.open('You must be logged in to use this feature!', 'Close', {duration: 10000, panelClass: 'custombar'});
            return;
        }
        if (this.isRatingWindowOpen) return;

        this.isRatingWindowOpen = true;

        const URL = this.route.snapshot.paramMap.get('id');
        if (!URL){
            console.error('NO ID');
            return;
        }

       const dialogRef = this.ratewindow.open(RatingwindowComponent, {
            width: '400px',
            data: {gameId: URL},
            hasBackdrop: true,
            disableClose: true,
            backdropClass: 'custom-backdrop',
            panelClass: 'transparent-dialog'
        });

            dialogRef.afterClosed().subscribe(() => {
                this.isRatingWindowOpen = false;
            });
    }

    AddtoFavourites(): void {
        if(!this.authservice.isLoggedIn()) {
            this.snackBar.open('You must be logged in with an account to use this feature!', 'Close', {duration: 10000, panelClass: 'custombar'});
            return;
        }
        if(!this.gameData) return;

        const idString = this.route.snapshot.paramMap.get('id');
        if(!idString) {
            console.log('NO ID');
            return
        }
        const id = Number(idString);
        if(isNaN(id)){
            console.log('NOT VALID ID');
            return;
        }

        this.favouriteService.addtoFavourite(id).subscribe({
            next: (response) => {
                this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: 'custombar'});
            },
            error: (err) => {
                this.snackBar.open('The game is already added to the favourites!', 'Close', {duration: 10000, panelClass: 'custombar'});
            }
        });
    }
}
