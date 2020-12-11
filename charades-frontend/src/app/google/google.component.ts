import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';

// https://www.npmjs.com/package/angularx-social-login

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})

export class GoogleComponent implements OnInit {
  user: SocialUser;

  constructor(private authService: SocialAuthService,
              private router: Router) {
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      user => {
        console.log('User signed in successfully. (Google)');
        localStorage.setItem('username', user.firstName);
        localStorage.setItem('authToken', user.authToken);
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['p']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
