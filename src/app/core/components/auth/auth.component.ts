import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signedIn = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSignedIn() {
    this.signedIn = !this.signedIn;
  }

  onSignIn() {
    this.signedIn = true;
  }

  onSignUp() {
    this.signedIn = true;
  }

  onSignOut() {
    this.signedIn = false;
  }
}
