import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Sign_in} from '../_models/sign_in';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  signInUserModel = new Sign_in('', '');

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  SignIn_onSubmit(): void {
    this.authenticationService.SignIn(this.signInUserModel);
  }

}
