import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }

  onSingIn(f: NgForm) {
    console.log('click');
    const {email, password} = f.value;
    this.authService.singIn(email, password);
  }
}
