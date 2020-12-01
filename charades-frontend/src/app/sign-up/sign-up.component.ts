import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Sign_up} from '../_models/sign_up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  signUpUserModel = new Sign_up('', '', '', '');

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  SignUp_onSubmit(): void {
    this.authenticationService.SignUp(this.signUpUserModel);
  }

}
