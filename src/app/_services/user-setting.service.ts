import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {User} from '../_models/user';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UserSettingService {
  userSource = new Subject<User>();
  userObservable = this.userSource.asObservable();
  userID = localStorage.getItem('userID');

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  setUser(user: User): void {
    this.userSource.next(user);
  }

  update(userID: string, user: any): void {
    this.http.patch('https://charades-with-friends-api.herokuapp.com/user/' + userID, user).subscribe(
      response => {
        this.setUser(response as User);
        console.log(response);
        this.openSnackBar('Changed successfully', 'Close');
      },
      error => {
        this.openSnackBar('Change failed', 'Close');
      });
  }

  delete(userID: string): void {
    this.http.delete('https://charades-with-friends-api.herokuapp.com/user/' + userID).subscribe(
      response => {
        this.router.navigate(['h']);
        this.dialog.closeAll();
      });
  }

  get(userID: string): void {
    this.http.get('https://charades-with-friends-api.herokuapp.com/user/' + userID).subscribe(
      response => {
        // @ts-ignore
        this.setUser(response.data);
      });
  }

}
