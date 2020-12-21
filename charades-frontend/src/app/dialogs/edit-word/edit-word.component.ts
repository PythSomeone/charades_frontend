import {Component, Inject, OnInit} from '@angular/core';
import {UserWordsService} from '../../_services/user-words.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.scss']
})
export class EditWordComponent implements OnInit {

  constructor(private userWordService: UserWordsService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: { word: any }) {
  }

  ngOnInit(): void {
  }

  updateWord(word: any): void {
    this.userWordService.update(word.user_id, word.category_id, word.id, word);
  }

  close(): void {
    this.dialog.closeAll();
  }

}
