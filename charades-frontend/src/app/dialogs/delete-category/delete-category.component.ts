import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {UserCategoriesService} from '../../_services/user-categories.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(private userCategoriesService: UserCategoriesService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: { category: any }) {
  }

  ngOnInit(): void {
  }

  deleteCategory(id: string): void {
this.userCategoriesService.deleteUserCategory(id);
  }

  close(): void {
    this.dialog.closeAll();
  }


}
