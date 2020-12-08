import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',


  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  user: string;


  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }


  ngOnInit(): void {
    document.body.removeAttribute('.modal-open');
    this.user = localStorage.getItem('username');
  }

  toCategories(): void {
    this.router.navigate(['c']);
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
