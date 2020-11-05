import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',


  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor() {
  }

  user: string;

  ngOnInit(): void {
    this.user = localStorage.getItem('username');

  }

}
