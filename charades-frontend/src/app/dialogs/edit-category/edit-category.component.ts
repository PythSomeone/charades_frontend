import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {UserCategoriesService} from '../../_services/user-categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor(private userCategoriesService: UserCategoriesService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: { category: any }) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialog.closeAll();
  }

  updateCategory(id: string, category: any): void {
    this.userCategoriesService.updateUserCategory(id, category);
}
}
