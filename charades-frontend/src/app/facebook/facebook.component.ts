import {Component, OnInit} from '@angular/core';
import {FacebookLoginProvider, SocialAuthService} from 'angularx-social-login';
import {Router} from '@angular/router';

declare var FB: any;


@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  constructor(private authService: SocialAuthService,
              private router: Router) {
  }

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log('User', user.firstName, user.lastName, 'signed in successfully. (FB)');
      localStorage.setItem('username', user.firstName);
      localStorage.setItem('authToken', user.authToken);
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['p']);
    });
  }

}



