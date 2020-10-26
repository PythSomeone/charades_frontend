import {Sign_in} from '../_models/sign_in';
import {Sign_up} from '../_models/sign_up';
import {Component, OnInit} from '@angular/core';
import {EnrollmentService} from '../_services/enrollment.service';


declare var FB: any;
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

  // niby jakieś błędy są, ale w kwestii frontendu działa prawidłowo.
  ngOnInit(): void {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '355306638859925',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  // tslint:disable-next-line:typedef
  submitLogin(){
    console.log('submit login to facebook');
    // FB.login();
    FB.login((response) =>
    {
      console.log('submitLogin', response);
      if (response.authResponse)
      {
        this.enrollmentService.SignUp(response);
      }
      else
      {
        console.log('User login failed');
      }
    });

  }
  // tslint:disable-next-line:typedef
  SignUp_onSubmit(){
    this.enrollmentService.SignUp(this.signUpUserModel);
  }
  SignIn_onSubmit(){
    this.enrollmentService.SignIn(this.signInUserModel);
  }
}


// App id: 355306638859925
