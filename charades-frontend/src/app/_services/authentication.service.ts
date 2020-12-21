import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {Sign_in} from '../_models/sign_in';
import {Sign_up} from '../_models/sign_up';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SocialAuthService} from 'angularx-social-login';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Sign_in>;
  public currentUser: Observable<Sign_in>;

  constructor(private http: HttpClient,
              private router: Router,
              public dialog: MatDialog,
              private authService: SocialAuthService,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar) {
    this.currentUserSubject = new BehaviorSubject<Sign_in>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // tslint:disable-next-line:typedef
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // tslint:disable-next-line:typedef
  SignUp(user: Sign_up) {
    return this.http.post('http://localhost:3000/sign_up', user).subscribe(
      data => {
        this.openSnackBar('User registered successfully', '');
        console.log('User Signed Up');
        this.dialog.closeAll();
      },
      error => {
        this.openSnackBar('Something went wrong', '');
        console.log('Error:', error.status, error.statusText);
      }
    );

  }

  // tslint:disable-next-line:typedef
  SignIn(user: Sign_in) {

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
        this.openSnackBar('User signed successfully', '');
        this.dialog.closeAll();
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
