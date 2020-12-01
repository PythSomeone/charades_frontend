import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  constructor(private authenticationService: AuthenticationService, public dialog: MatDialog) {
  }

  openSignIn(): void {
    this.dialog.open(SignInComponent, {})
  }

  openSignUp(): void {
    this.dialog.open(SignUpComponent, {})
  }

  ngOnInit(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
    this.authenticationService.logOut();
  }
}
