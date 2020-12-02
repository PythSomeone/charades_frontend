import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Sign_up} from '../_models/sign_up';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  signUpUserModel = new Sign_up('', '', '', '');
  hide = true;

  constructor(private authenticationService: AuthenticationService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  signUp(): void {
    this.authenticationService.SignUp(this.signUpUserModel);
  }

  close(): void {
    this.dialog.closeAll();
  }

}
