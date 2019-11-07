import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'My first AGM project';
  data;

  constructor(protected router: Router, private firebaseService: FirebaseService) {
    this.firebaseService.getPotholes()
      .subscribe(res => {
        this.data = res;
        console.log(res);
      });
  }

  ngOnInit() {
  }

}
