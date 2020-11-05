import { Component, OnInit } from '@angular/core';

@Component({
<<<<<<< Updated upstream
=======
  selector: 'app-profile',
>>>>>>> Stashed changes
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }

  ngOnInit(): void {
=======
  user;
  constructor() {
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('username');
>>>>>>> Stashed changes
  }

}
