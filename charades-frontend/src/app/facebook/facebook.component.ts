import {Component, OnInit} from '@angular/core';
import {FacebookLoginProvider, SocialAuthService} from 'angularx-social-login';
import {Router} from '@angular/router';
import {SocialService} from '../_services/social.service';


@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  constructor(private socialService: SocialService,
              private router: Router) {
  }


  async signInWithFacebook(): Promise<void> {
    await this.socialService.signInWithFB();
  }

  ngOnInit(): void {
  }
}
