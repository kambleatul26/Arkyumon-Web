import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseService } from 'src/app/services/firebase.service';

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
    public snackBar: MatSnackBar,
    private firebaseService: FirebaseService,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.sb = this.snackBar.open(message, action, {
      duration: 4000,
    });

    this.sb.onAction('Continue').subscribe(() => {
      console.log('The snack-bar action was triggered!');
      this.dialogRef.close(this.data.cmp.id);
    });

  }

  delete() {
    this.openSnackBar('The Complaint will be deleted', 'Continue');
  }

  ngOnInit() {
    this.firebaseService.getImage(this.data.cmp.imageUrl)
      .subscribe(res => {
        console.log(res);
        const image = new Image();
        image.src = res;
        document.getElementById('img').appendChild(image);
      });
  }

}
