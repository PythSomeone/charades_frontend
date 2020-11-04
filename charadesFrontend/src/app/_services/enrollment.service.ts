import {Sign_up} from '../_models/sign_up';
import {Sign_in} from '../_models/sign_in';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class EnrollmentService {

  constructor(
    private http: HttpClient,
    private router: Router) {
  }


  // tslint:disable-next-line:typedef
  SignUp(user: Sign_up) {

    return this.http.post('http://localhost:3000/sign_up', user).subscribe(
      data => {
        console.log('Success', data);
      },
      error => console.log('Error:', error.status, error.statusText)
    );

  }

  // tslint:disable-next-line:typedef
  SignIn(user: Sign_in) {

    return this.http.post('http://localhost:3000/sign_in', user).subscribe(
      data => {
        console.log('Success', data);
      },
      error => console.log('Error:', error)
    );

  }
}
