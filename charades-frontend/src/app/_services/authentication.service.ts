import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

import {Sign_in} from '../_models/sign_in';
import {Sign_up} from '../_models/sign_up';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SocialAuthService} from 'angularx-social-login';
import {BasicCategoriesService} from './basic-categories.service';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Sign_in>;
  public currentUser: Observable<Sign_in>;


  constructor(private http: HttpClient,
              private router: Router,
              public dialog: MatDialog,
              private authService: SocialAuthService,
              private snackBar: MatSnackBar,
              private injector: Injector,
  ) {
    this.currentUserSubject = new BehaviorSubject<Sign_in>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  SignUp(user: Sign_up): Subscription {
    return this.http.post('http://localhost:3000/sign_up', user).subscribe(
      response => {
        this.openSnackBar('User registered successfully', '');
        const basicCategoriesService = this.injector.get(BasicCategoriesService);
        // @ts-ignore
        console.log('User Signed Up');
        // @ts-ignore
        localStorage.setItem('userID', response.data.id);
        this.dialog.closeAll();
        // @ts-ignore
        basicCategoriesService.load(response.data.user.id);
      },
      error => {
        this.openSnackBar('Something went wrong', '');
        console.log('Error:', error.status, error.message);
      }
    );

  }

  SignIn(user: Sign_in): Subscription {
    return this.http.post('http://localhost:3000/sign_in', user).subscribe(
      response => {
        localStorage.setItem('socialLogin', 'false');
        // @ts-ignore
        this.user = response.data.user;
        this.logIn();
        console.log('User signed in. ');
        // @ts-ignore
        localStorage.setItem('username', response.data.user.username);
        // @ts-ignore
        localStorage.setItem('authToken', response.data.user.authentication_token);
        // @ts-ignore
        localStorage.setItem('userID', response.data.user.id);
        this.openSnackBar('User signed successfully', '');
        this.dialog.closeAll();
        this.router.navigate(['p']);
      },
      error => {
        this.openSnackBar('Something went wrong', '');
      }
    );
  }

  QuietlySignUp(user: Sign_up): Subscription {
    return this.http.post('http://localhost:3000/sign_up', user).subscribe(
      response => {
        console.log('User Signed Up');

        // @ts-ignore
        localStorage.setItem('userID', response.data.id);
      },
      error => {
        console.log('Error:', error.status, error.statusText);
      }
    );

  }

  QuietlySignIn(user: Sign_in): Subscription {

    return this.http.post('http://localhost:3000/sign_in', user).subscribe(
      response => {
        // @ts-ignore
        this.user = response.data.user;
        this.logIn();
        console.log('User signed in. ');
        // @ts-ignore
        localStorage.setItem('username', response.data.user.username);
        // @ts-ignore
        localStorage.setItem('authToken', response.data.user.authentication_token);
        // @ts-ignore
        localStorage.setItem('userID', response.data.user.id);
        this.router.navigate(['p']);
      },
      error => {
        this.openSnackBar('Something went wrong', '');
        console.log('Error:', error);
      }
    );
  }


  logIn(): void {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logOut(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.authService.signOut(true);
    this.router.navigate(['h']);
  }
}
