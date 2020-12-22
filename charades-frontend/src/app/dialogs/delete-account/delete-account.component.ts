import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {UserSettingService} from '../../_services/user-setting.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {

  userID = localStorage.getItem('userID');

  constructor(
    private userSettingService: UserSettingService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  deleteAccount(): void {
    this.userSettingService.delete(this.userID);
  }

  close(): void {
    this.dialog.closeAll();
  }

}
