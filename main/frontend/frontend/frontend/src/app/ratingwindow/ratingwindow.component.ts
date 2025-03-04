import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar} from '@angular/material/snack-bar';
import { ratingservice } from '../../ratingservice';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IRatingsResponse } from '../../gamedetails.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ratingwindow',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './ratingwindow.component.html',
  styleUrl: './ratingwindow.component.css'
})
export class RatingwindowComponent {
    constructor(
      private ratingservice: ratingservice,
      private snackBar: MatSnackBar,
      public dialogRef: MatDialogRef<RatingwindowComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {gameid : string}
    ) {
      dialogRef.updateSize('400px', 'auto');
    }

    rate(isPositive: boolean): void {
      this.ratingservice.rate(this.data.gameid, isPositive).subscribe({
        next: (response: IRatingsResponse) => {
          this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: 'custombar'});
          this.dialogRef.close();
        },
        error: (err: HttpErrorResponse) => {
          const errorResponse = err.error as IRatingsResponse;
          this.snackBar.open(errorResponse.message, 'Close', {duration: 10000, panelClass: 'custombar'});
          if (err.status === 401) this.dialogRef.close();
        }
      });
    }
}
