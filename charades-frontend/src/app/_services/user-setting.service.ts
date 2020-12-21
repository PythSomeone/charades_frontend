import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserSettingService {
  userSource = new Subject<User>();
  userObservable = this.userSource.asObservable();
  userID = localStorage.getItem('userID');

  constructor(private http: HttpClient) {
  }

  setUser(user: User): void {
    this.userSource.next(user);
  }

  update(userID: string, user: any): void {
    this.http.patch('http://localhost:3000/user/' + userID, user).subscribe(
      response => {
        this.setUser(response as User);
        console.log(response);
      });
  }

  delete(userID: string): void {
    this.http.delete('http://localhost:3000/user/' + userID).subscribe(
      response => {
        console.log(response);
      });
  }

  get(userID: string): void {
    this.http.get('http://localhost:3000/user/' + userID).subscribe(
      response => {
        console.log(response);
        // @ts-ignore
        this.setUser(response.data);
      });
  }

}
