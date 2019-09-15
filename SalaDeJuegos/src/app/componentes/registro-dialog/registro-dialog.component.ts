import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-dialog',
  templateUrl: './registro-dialog.component.html',
  styleUrls: ['./registro-dialog.component.scss']
})
export class RegistroDialogComponent{

  message: string = "Estas seguro?"
  confirmButtonText = "Acepto"
  cancelButtonText = "No Acepto"
  constructor(private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<RegistroDialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  onCloseClick(): void {
    this.dialogRef.close(true);
    this.router.navigate(['/Principal']);
  }
}
