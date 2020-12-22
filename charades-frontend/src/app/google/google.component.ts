import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';
import {SocialService} from '../_services/social.service';

// https://www.npmjs.com/package/angularx-social-login

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})

export class GoogleComponent implements OnInit {
  user: SocialUser;

  constructor(private socialService: SocialService) {
  }

  async signInWithGoogle(): Promise<void> {
    await this.socialService.signInWithGoogle();
  }

  ngOnInit(): void {
  }
}
