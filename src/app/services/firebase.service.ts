import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  data: any = null;

  constructor(public db: AngularFirestore) {
    this.db.collection('Data').valueChanges()
      .subscribe(res => {
        this.data = res;
        console.log(res);
      });
  }

  getData() {
    console.log(this.data);
  }
}
