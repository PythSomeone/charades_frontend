import {Component, OnInit} from '@angular/core';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {Router} from '@angular/router';
import {UserCategoriesService} from '../_services/user-categories.service';
import {Category} from '../_models/category';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCategoryComponent} from '../dialogs/delete-category/delete-category.component';
import {EditCategoryComponent} from '../dialogs/edit-category/edit-category.component';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss']
})
export class UserCategoriesComponent implements OnInit {
  userId = localStorage.getItem('userID');
  category = new Category('', this.userId);
  categories: any;
  words: any[];
  selectedCategory: any;

  constructor(private colorSchemeService: ColorSchemeService,
              private router: Router,
              private userCategoriesService: UserCategoriesService,
              private dialog: MatDialog,
  ) {
    this.words = [];
    colorSchemeService.load();
    this.userCategoriesService.setUserCategories$.subscribe(
      categories => {
        this.categories = categories;
      });
    this.userCategoriesService.setUserCategoryWords$.subscribe(
      words => {
        this.words.push(words);
      }
    );
  }

  ngOnInit(): void {
    this.userCategoriesService.getUserCategories();
    console.log(this.words);
  }

  toProfile(): void {
    this.router.navigate(['p']);
  }

  createCategory(): void {
    this.userCategoriesService.createUserCategory(this.category);
  }

  openDeleteDialog(category: any): void {
    this.dialog.open(DeleteCategoryComponent, {data: {category}});
  }


  openEditDialog(category: any): void {
    this.dialog.open(EditCategoryComponent, {data: {category}});
  }

}
