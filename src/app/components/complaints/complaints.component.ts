import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComplaintComponent } from '../modal-complaint/modal-complaint.component';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  data;

  constructor(protected router: Router, public dialog: MatDialog, private firebaseSerive: FirebaseService) {
    this.firebaseSerive.getComplaints()
      .subscribe(res => {
        this.data = res;
        console.log(res);
      });
  }

  open(id) {
    const comp = this.data.find(c => {
      return id === c.id;
    });
    const dialogRef = this.dialog.open(ModalComplaintComponent, {
      width: '800px',
      height: '500px',
      data: {cmp: comp}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      const id = result;
    });
  }

  ngOnInit() {
  }

}
