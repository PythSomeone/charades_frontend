import {EnrollmentService} from '../_services/enrollment.service';
import {Component, NgModule, OnInit} from '@angular/core';
import {Sign_up} from '../_models/sign_up';
import {Sign_in} from '../_models/sign_in';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EnrollmentService]
})
export class HomeComponent implements OnInit {
  signUpUserModel = new Sign_up('', '', '');
  signInUserModel = new Sign_in('', '');

  constructor(private enrollmentService: EnrollmentService) {
  }


  ngOnInit(): void {
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
