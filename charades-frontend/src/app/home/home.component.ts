import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {SignInComponent} from '../sign-in/sign-in.component';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {ColorSchemeService} from '../_services/color-scheme.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  constructor(private authenticationService: AuthenticationService,
              public dialog: MatDialog,
              private colorSchemeService: ColorSchemeService) {
    this.colorSchemeService.load();
  }


  themes = [
    {
      name: 'dark',
      icon: 'brightness_3'
    },
    {
      name: 'light',
      icon: 'wb_sunny'
    }
  ];

  openSignIn(): void {
    this.dialog.open(SignInComponent, {});
  }

  openSignUp(): void {
    this.dialog.open(SignUpComponent, {});
  }

  setTheme(theme: string): void {
    this.colorSchemeService.update(theme);
  }

  ngOnInit(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
    this.authenticationService.logOut();
  }
}
