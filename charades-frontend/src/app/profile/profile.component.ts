import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {UserSettingService} from '../_services/user-setting.service';
import {SocialService} from '../_services/social.service';
import {NgFerhadoTranslator} from '../translation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userID = localStorage.getItem('userID');
  user: string;

  constructor(
    private socialService: SocialService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private colorSchemeService: ColorSchemeService,
    private userSettingsService: UserSettingService) {
    localStorage.setItem('refreshed', 'false');
    colorSchemeService.load();
    this.userSettingsService.get(this.userID);
    this.userSettingsService.userObservable.subscribe(
      user => {
        this.user = user.username;
      });
  }


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

  toSettings(): void {
    this.router.navigate(['s']);
  }

  toHistoryAndStatistics(): void {
    this.router.navigate(['hns']);
  }
}
