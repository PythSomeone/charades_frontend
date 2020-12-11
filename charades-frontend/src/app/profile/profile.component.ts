import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../_services/color-scheme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  user: string;


  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private colorSchemeService: ColorSchemeService) {
    colorSchemeService.load();
  };


  ngOnInit(): void {
    document.body.removeAttribute('.modal-open');
    this.user = localStorage.getItem('username');
  }

  toCreateGame(): void {
    this.router.navigate(['gc']);
  }

  toCategoriesManagement(): void {
    this.router.navigate(['cm']);
  }

  logOut(): void {
    this.authenticationService.logOut();
    console.log('User Log out.');

  }
}
