import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {SignUpComponent} from '../dialogs/sign-up/sign-up.component';
import {SignInComponent} from '../dialogs/sign-in/sign-in.component';
import {Translator} from '../translation';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  checked = false;

  constructor(private authenticationService: AuthenticationService,
              public dialog: MatDialog,
              private colorSchemeService: ColorSchemeService,
              public translator: Translator) {
    this.checkSlideToggle();
    this.colorSchemeService.load();
  }

  checkSlideToggle(): void {
    if (localStorage.getItem('prefers-color')  === 'dark'){
      this.checked = true;
    }
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
  }
}
