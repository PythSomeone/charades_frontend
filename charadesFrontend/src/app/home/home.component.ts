import {Sign_in} from '../_models/sign_in';
import {Sign_up} from '../_models/sign_up';
import {Component, OnInit} from '@angular/core';
import {EnrollmentService} from '../_services/enrollment.service';
import { ViewChild, ElementRef } from '@angular/core';
import {GoogleComponent} from '../google/google.component';

// tslint:disable-next-line:label-position no-unused-expression

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EnrollmentService]
})
export class HomeComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  auth2:any;
  signUpUserModel = new Sign_up('', '', '');
  signInUserModel = new Sign_in('', '');

  constructor(private enrollmentService: EnrollmentService, private google: GoogleComponent) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.google.googleInitialize();
  }


  // tslint:disable-next-line:typedef
  SignUp_onSubmit() {
    this.enrollmentService.SignUp(this.signUpUserModel);
  }

  // tslint:disable-next-line:typedef
  SignIn_onSubmit() {
    this.enrollmentService.SignIn(this.signInUserModel);
  }

}
// App id: 355306638859925
