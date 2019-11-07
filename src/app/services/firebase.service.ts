import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  downloadURL: Observable<string>;

  constructor(
    public db: AngularFirestore,
    private http: HttpClient,
    private afStorage: AngularFireStorage,
    ) { }

  getComplaints() {
    return this.db.collection('complaints').valueChanges();
  }

  getPotholes() {
    return this.db.collection('potholes').valueChanges();
  }

  getImage(url) {
    return this.afStorage.ref(url).getDownloadURL();
  }

}
