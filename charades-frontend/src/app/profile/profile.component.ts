import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-profile',


  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {


  user: string;


  constructor(private authenticationService: AuthenticationService) {
  }


  ngOnInit(): void {
    document.body.removeAttribute('.modal-open');
    this.user = localStorage.getItem('username');
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
