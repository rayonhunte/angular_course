import { Component, OnInit } from '@angular/core';
import { RecipesService } from './services/recipes.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipesService]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBLDUlHhDNKGvL0UWsoH8QONKa7w675xPo",
        authDomain: "udemy-temp.firebaseapp.com",
      });
      //const currentUser = JSON.parse(localStorage.getItem())
  }
}
