import {Component, OnInit} from '@angular/core';
import {SocialUser} from 'angularx-social-login';
import {SocialService} from '../_services/social.service';

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
