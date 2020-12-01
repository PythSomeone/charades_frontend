import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  constructor(private authenticationService: AuthenticationService) {
  }


  ngOnInit(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
    this.authenticationService.logOut();
  }
}
