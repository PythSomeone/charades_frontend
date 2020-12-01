
import {Component, OnInit} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.sass']
})
export class GoogleComponent implements OnInit {


  constructor() {
  }


  auth2: any;
  @ViewChild('loginRef') loginElement: ElementRef;

  ngOnInit(): void {
    this.googleInitialize();
  }

  // tslint:disable-next-line:typedef
  public googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '1096940430460-ln1fkpm3muobqapvpbp0qnt094v0doll.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    };
    // tslint:disable-next-line:only-arrow-functions typedef

    (function (d, s, id) {

      // tslint:disable-next-line:one-variable-per-declaration prefer-const
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  // tslint:disable-next-line:typedef
  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }, (error) => {

      });
  }
}
