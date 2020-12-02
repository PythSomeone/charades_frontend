import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './_services/authentication.service';
import {Sign_in} from './_models/sign_in';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'charadesFrontend';
  currentUser: Sign_in;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

}
