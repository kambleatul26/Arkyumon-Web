import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-complaint',
  templateUrl: './modal-complaint.component.html',
  styleUrls: ['./modal-complaint.component.scss']
})
export class ModalComplaintComponent implements OnInit {

  sb: any;

  constructor(
    public dialogRef: MatDialogRef<ModalComplaintComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public snackBar: MatSnackBar) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.sb = this.snackBar.open(message, action, {
      duration: 4000,
    });

    this.sb.onAction('Continue').subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });

  }

  delete() {
    this.openSnackBar('The Complaint will be deleted', 'Continue');
  }

  ngOnInit() {
    const image = new Image();
    image.src = this.data.cmp.image;
    document.getElementById('img').appendChild(image);
  }

}
