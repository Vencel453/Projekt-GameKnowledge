import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Authservice } from '../authservice';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface Review {
  id: number;
  title: string;
  content: string;
  date: string;
  'User.username': string;
  'User.Ratings.positive': number;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
    @Input() id!: number;
    @Input() reviews: Review[] = [];

    showAllReviews: boolean = false;

    like: string = './like.png';
    dislike: string = './dislike.png';

    reviewTitle: string = '';
    reviewcontent: string = '';
    isSubmitting: boolean = false;
    UserReviewed: boolean = false;
    currentUser: string | null = null;
    isAdmin: boolean = false;

    constructor(private http: HttpClient, public authservice: Authservice, private snackBar: MatSnackBar) {}

    ngOnInit(): void {
      this.currentUser = this.authservice.getUsername();
      this.authservice.isAdmin$.subscribe(val => this.isAdmin = val);
      if (this.currentUser) {
        this.UserReviewed = this.reviews.some(
          review => review['User.username'] === this.currentUser
        );
      }
      this.authservice.username$.subscribe(newUsername => {
        if(this.currentUser && newUsername && this.currentUser !== newUsername){
          this.reviews = this.reviews.map(review => {
            if(review['User.username'] === this.currentUser) {
              return { ...review, 'User.username': newUsername};
            }
            return review;
          });
          this.currentUser = newUsername;
          this.UserReviewed = this.reviews.some(review => review['User.username'] === this.currentUser);
        }
      });
    }

    get displayedReviews(): Review[] {
      return this.showAllReviews ? this.reviews : this.reviews.slice(0, 5);
    }

    toggleShowAll(): void {
      this.showAllReviews = !this.showAllReviews;
    }

    submit(): void {

      if(this.isSubmitting){
        return;
      }

      if (!this.authservice.isLoggedIn()) {
        this.snackBar.open('You must be logged in with an account to use this feature!', 'Close', {duration: 10000, panelClass: 'custombar'});
        return;
      }
      if (!this.reviewTitle || this.reviewTitle.trim().length < 5) {
        this.snackBar.open('Title must be at least 5 characters long!', 'Close', {duration: 10000, panelClass: 'custombar'});
        return;
      }
      if (this.reviewTitle.length > 100){
        this.snackBar.open('Title is too long! Must be less than 100 characters long!', 'Close', {duration: 10000, panelClass: 'custombar'});
        return;
      }
      if (!this.reviewcontent || this.reviewcontent.trim().length < 50){
        this.snackBar.open('Content must be at least 50 characters long!', 'Close', {duration: 10000, panelClass: 'custombar'});
        return;
      }
      if(this.reviewcontent.length > 5000){
        this.snackBar.open('Content is too long! It must be less than 5000 characters long!', 'Close', {duration: 10000, panelClass: 'custombar'});
        return;
      }

      const backendurl = `http://localhost:3000/game/${this.id}/review`;
      const payload = {
        title: this.reviewTitle,
        content: this.reviewcontent
      };

      this.isSubmitting = true;
      this.http.put<any>(backendurl, payload).subscribe({
        next: (response) => {
          this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: 'custombar'});
          const newReview: Review = {
            id: Date.now(),
            title: this.reviewTitle,
            content: this.reviewcontent,
            date: new Date().toISOString(),
            'User.username': this.currentUser!,
            'User.Ratings.positive': 1
          };
          this.reviews.push(newReview);
          this.UserReviewed = true;
          this.reviewTitle = '';
          this.reviewcontent = '';
          this.isSubmitting = false;
        },
        error: (err) => {
          this.snackBar.open('Failed to submit the review! You must rate the game first!', 'Close', {duration: 10000, panelClass: 'custombar'});
          this.isSubmitting = false;
        }
      });
    }

    deleteReview(reviewId: number): void {
      if(!this.authservice.isLoggedIn()) {
        this.snackBar.open('You must be logged in to use this feature!', 'Close', {duration: 10000, panelClass: 'custombar'});
        return;
      }
      const backendurl = `http://localhost:3000/game/${this.id}/review`;
        this.http.request<any>('delete', backendurl, {body: {reviewId}}).subscribe({
          next: (response) => {
            this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: 'custombar'});
            this.reviews = this.reviews.filter(review => review.id !== reviewId);
            if (this.currentUser) {
              this.UserReviewed = this.reviews.some(
                review => review['User.username'] === this.currentUser
              );
            }
          },
          error: (err) => {
            this.snackBar.open(err.error.message || 'Failed to delete the review!', 'Close', {duration: 10000, panelClass: 'custombar'});
          }
        });
    }

    canDelete(review: Review): boolean {
      return this.isAdmin || (this.currentUser === review['User.username']);
    }
}
