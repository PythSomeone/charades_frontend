<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';

=======
import {Sign_in} from '../_models/sign_in';
import {Sign_up} from '../_models/sign_up';
import {EnrollmentService} from '../_services/enrollment.service';
import {Component, NgModule, OnInit} from '@angular/core';


>>>>>>> Stashed changes
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }
=======
  signUpUserModel = new Sign_up('', '', '');
  signInUserModel = new Sign_in('', '');

  constructor(private enrollmentService: EnrollmentService) {
  }

>>>>>>> Stashed changes

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
=======

  // tslint:disable-next-line:typedef
  SignUp_onSubmit() {
    this.enrollmentService.SignUp(this.signUpUserModel);
  }

  // tslint:disable-next-line:typedef
  SignIn_onSubmit() {
    this.enrollmentService.SignIn(this.signInUserModel);
  }
>>>>>>> Stashed changes
}
