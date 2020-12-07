import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Sign_in} from '../_models/sign_in';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInUserModel = new Sign_in('', '');
  hide = true;

  constructor(private authenticationService: AuthenticationService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authenticationService.SignIn(this.signInUserModel);
  }

 close(): void {
    this.dialog.closeAll();
  }

}
