import {Injectable} from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';
import {Sign_up} from '../_models/sign_up';
import {AuthenticationService} from './authentication.service';
import {Sign_in} from '../_models/sign_in';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class SocialService {
  constructor(private authService: SocialAuthService,
              private router: Router,
              private authenticationService: AuthenticationService){
  }

  socialLogin;
  user: SocialUser;
  newUser = new Sign_up('', '', '', '');
  login = new Sign_in('', '');

  subscribeSocial(): void {
    this.socialLogin = this.authService.authState.subscribe((user) => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          this.authenticationService.QuietlySignIn(this.login);
        }, 100);
      });
      this.user = user;
      localStorage.setItem('username', user.firstName);
      localStorage.setItem('email', user.email);
      localStorage.setItem('authToken', user.authToken);
      localStorage.setItem('socialLogin', 'true');

      this.newUser.username = user.firstName;
      this.newUser.email = user.email;
      this.newUser.password_confirmation = user.id;
      this.newUser.password = user.id;

      this.login.email = user.email;
      this.login.password = user.id;

      this.authenticationService.QuietlySignUp(this.newUser);
      promise.then(value => {
        console.log(value);
      });
    });
  }

  async signInWithGoogle(): Promise<void> {
    await this.subscribeSocial();
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log('User signs in. (Google)');
  }

  async signInWithFB(): Promise<void> {
    await this.subscribeSocial();
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log('User signs in. (FB)');
  }

  async signOut(): Promise<void> {
    await this.authService.signOut();
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('authToken');
    localStorage.removeItem('response');
    await this.router.navigate(['h']);
    location.reload();
  }

}
