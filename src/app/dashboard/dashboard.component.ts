import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { Observable } from 'rxjs';

import * as firebase from 'firebase'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FirebaseApp } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName;

  public items: Observable<any[]>;
  private itemCollection: AngularFirestoreCollection<any>;

  constructor(private user: AppService , db: AngularFirestore,
    private router: Router) {

    this.userName = this.user.getUserDetail();

    this.itemCollection = db.collection('/Books/Shelf-01/Dan Brown Novels');
    this.items = this.itemCollection.valueChanges();

   }

  ngOnInit() {
  }

  signOut(){

    this.router.navigate(['']);

  }

}
