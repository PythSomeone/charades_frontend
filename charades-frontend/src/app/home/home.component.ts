import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {SignInComponent} from '../sign-in/sign-in.component';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {ColorSchemeService} from '../_services/color-scheme.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private authenticationService: AuthenticationService,
              public dialog: MatDialog,
              private colorSchemeService: ColorSchemeService) {
    this.colorSchemeService.update('light');
  }

  openSignIn(): void {
    this.dialog.open(SignInComponent, {});
  }

  openSignUp(): void {
    this.dialog.open(SignUpComponent, {});
  }

  setTheme(): void {
    if (localStorage.getItem('prefers-color') === 'light') {
      this.colorSchemeService.update('dark');
    } else {
      this.colorSchemeService.update('light');
    }

  }

  ngOnInit(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
    this.authenticationService.logOut();
  }
}
