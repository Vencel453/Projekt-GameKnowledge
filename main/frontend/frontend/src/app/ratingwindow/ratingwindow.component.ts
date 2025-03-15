//Szükséges importok 
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar} from '@angular/material/snack-bar';
import { ratingservice } from '../../ratingservice';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IRatingsResponse } from '../../gamedetails.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

//Standalone komponens definiálása
@Component({
  selector: 'app-ratingwindow',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './ratingwindow.component.html',
  styleUrl: './ratingwindow.component.css'
})
export class RatingwindowComponent {
    constructor(
      private ratingservice: ratingservice,   //Értékelés szolgáltatás
      private snackBar: MatSnackBar,    //Felugró üzenet
      public dialogRef: MatDialogRef<RatingwindowComponent>,    //Dialog referencia
      @Inject(MAT_DIALOG_DATA) public data: {gameId : string}   //Átvett adat: játék ID
    ) {
      dialogRef.updateSize('400px', 'auto');    //Dialog méret beállítása
    }

    //Értékelés beküldése
    rate(isPositive: boolean): void {
      this.ratingservice.rate(this.data.gameId, isPositive).subscribe({
        next: (response: IRatingsResponse) => {
          //Sikeres válasz kezelése
          this.snackBar.open(response.message, 'Close', {duration: 10000, panelClass: 'custombar'});
          this.dialogRef.close();
        },
        //Hibák kezelése
        error: (err: HttpErrorResponse) => {
          const errorResponse = err.error as IRatingsResponse;
          this.snackBar.open(errorResponse.message, 'Close', {duration: 10000, panelClass: 'custombar'});
          if (err.status === 401) this.dialogRef.close();
        }
      });
    }
}
