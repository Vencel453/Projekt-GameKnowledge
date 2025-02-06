import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Authservice } from './authservice';
import { CommonModule } from '@angular/common';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  isAuthenticated$: Observable<boolean>;
  user$: Observable<{ username: string; isadmin: boolean} | null>;

  ismenuopen = false;

  constructor (private authService: Authservice, private router: Router) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.user$ = combineLatest([
      this.authService.username$,
      this.authService.isAdmin$,
      this.authService.isAuthenticated$
    ]).pipe(
      map(([username, isAdmin, isauthenticated]) =>isauthenticated && username ? {username, isadmin: isAdmin} : null)
    );
    this.isAuthenticated$.subscribe(value => console.log("isAuthenticated$:", value));
  }

  menutoggle(){
    this.ismenuopen = !this.ismenuopen;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
