import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private router: Router) { }

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
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => this.token = token
        );
      }
    ).catch(
      err => console.log(err)
    );
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }

  async getToken() {
    const user = await firebase.auth().currentUser;
    await user.getIdToken().then(
       (token: string) => {
         this.token = token;
         console.log(token);
      }
    );
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }
}
