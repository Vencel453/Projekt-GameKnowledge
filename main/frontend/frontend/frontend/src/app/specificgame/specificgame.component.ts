import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface GameResponse {
  error: boolean;
  message: string;
  datas: any;
}

@Component({
  selector: 'app-specificgame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specificgame.component.html',
  styleUrl: './specificgame.component.css'
})
export class SpecificgameComponent implements OnInit {
  gameData: any;

  controllerTypes = [
    {type: 'xbox', icon: '/public/XBox.png', alt: 'Xbox Controller'},
    {type: 'psdualshock', icon: '/public/PSdualshock.png', alt: 'PS Dualshock'},
    {type: 'psdualsense', icon: '/public/PSdualsense.png', alt: 'PS Dualsense'}
  ]

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    if(gameId){
      this.http.get<GameResponse>(`http://localhost:3000/games/${gameId}`)
      .subscribe({
        next: (res) => {
            if(!res.error) {
              this.gameData = res.datas;
            } else {
              console.error('Error fetching game data: ', res.message);
            }
        },
        error: (err) => {
          console.error('HTTP error:', err);
        }
      });
    } else {
      console.warn('There is no id in the router!');
    }
  }

  getBoxartPath(originalPath: string): string {
    if(!originalPath) return '';
    const filename = originalPath.split('/').pop();
    return '/public/pictures/boxarts/' + filename;
  }

  getGalleryPath(originalPath: string): string {
    if(!originalPath) return '';
    const filename = originalPath.split('/').pop();
    return '/public/pictures/gallery/' + filename
  }

  getRatingIcon(institution: string, rating: string): string {
    const instLower = institution.toLowerCase();
    const rateLower = rating.toLowerCase();

    if(instLower === 'pegi'){
      return `/public/ageratings/pegi${rateLower}.png`;
    }

    return `/public/ageratings/generic.png`;
  }

}
