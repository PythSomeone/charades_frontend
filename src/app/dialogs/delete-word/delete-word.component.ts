import {Component, Inject, OnInit} from '@angular/core';
import {UserWordsService} from '../../_services/user-words.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-word',
  templateUrl: './delete-word.component.html',
  styleUrls: ['./delete-word.component.scss']
})
export class DeleteWordComponent implements OnInit {

  constructor(private userWordService: UserWordsService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: { word: any }) { }

  ngOnInit(): void {
  }

  deleteWord(word: any): void {
    this.userWordService.delete(word.user_id, word.category_id, word.id);
}

  close(): void {
    this.dialog.closeAll();
  }

}
