import {Component, OnInit} from '@angular/core';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {Router} from '@angular/router';
import {UserSettingService} from '../_services/user-setting.service';
import {User} from '../_models/user';

@Component({
  selector: 'app-user-categories',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userID = localStorage.getItem('userID');
  user = new User('', '');
  checked: boolean;

  constructor(private router: Router,
              private userSettingsService: UserSettingService,
              private colorSchemeService: ColorSchemeService) {
    this.userSettingsService.get(this.userID);
    this.userSettingsService.userObservable.subscribe(
      user => {
        this.user = user;
      });
    this.checkSlideToggle();
    this.colorSchemeService.load();
  }

  checkSlideToggle(): void {
    if (localStorage.getItem('prefers-color') === 'dark') {
      this.checked = true;
    }
  }

  ngOnInit(): void {
  }

  toProfile(): void {
    this.router.navigate(['p']);
  }

  setLight(): void {
    this.colorSchemeService.update('light');
  }

  setDark(): void {
    this.colorSchemeService.update('dark');
  }

  changeEmail(user: any): void {
    this.userSettingsService.update(this.userID, user);
  }

  changeUsername(user: any): void {
    this.userSettingsService.update(this.userID, user);
  }

  deleteUser(): void {
    this.userSettingsService.delete(this.userID);
  }

}

