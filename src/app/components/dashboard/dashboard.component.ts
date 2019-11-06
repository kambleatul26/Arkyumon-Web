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
  data = [
    {
      lat: 19.1231776,
      lng: 72.8339267
    },
    {
      lat: 19.4231776,
      lng: 72.4339267
    },
    {
      lat: 19.6231776,
      lng: 72.5339267
    }
  ];

  constructor(protected router: Router, private firebaseService: FirebaseService) {
    this.firebaseService.getData();
  }

  ngOnInit() {
  }

}
