import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor() { }

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        res => console.log('logged in')
      )
      .catch(
        err => console.log(err)
      );
  }

  singIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      res => {
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => this.token = token
        );
      }
    ).catch(
      err => console.log(err)
    );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }
}
