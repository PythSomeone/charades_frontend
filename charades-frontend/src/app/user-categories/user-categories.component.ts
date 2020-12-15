import {Component, OnInit} from '@angular/core';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {Router} from '@angular/router';
import {UserCategoriesService} from '../_services/user-categories.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCategoryComponent} from '../dialogs/delete-category/delete-category.component';
import {EditCategoryComponent} from '../dialogs/edit-category/edit-category.component';
import {Categories} from '../_models/categories';
import {Category} from '../_models/category';
import {WordsService} from '../_services/words.service';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss']
})
export class UserCategoriesComponent implements OnInit {
  userId = localStorage.getItem('userID');
  categories: Array<Categories> = [new Categories('', '', '', [])];
  category = new Category('', '');

  constructor(private colorSchemeService: ColorSchemeService,
              private router: Router,
              private userCategoriesService: UserCategoriesService,
              private wordsService: WordsService,
              private dialog: MatDialog,
  ) {
    colorSchemeService.load();
    this.userCategoriesService.getUserCategories(localStorage.getItem('userID'));
    this.userCategoriesService.setUserCategories$.subscribe(
      (categories: Category[]) => {
        this.categories = categories as Categories[];
        this.categories.forEach((element) => {
          this.wordsService.getUserCategoryWords(element.user_id, element.id);
          element.words = [];
          this.wordsService.setUserCategoryWords$.subscribe(
            words => {
              element.words = [];
              element.words = words;
            }
          );
          console.log(this.categories);
        });

      });
  }

  ngOnInit(): void {

  }

  toProfile(): void {
    this.router.navigate(['p']);
  }

  createCategory(): void {
    this.category.user_id = localStorage.getItem('userID');
    this.userCategoriesService.createUserCategory(this.category.user_id ,this.category);
  }

  openDeleteDialog(category: any): void {
    this.dialog.open(DeleteCategoryComponent, {data: {category}});
  }


  openEditDialog(category: any): void {
    this.dialog.open(EditCategoryComponent, {data: {category}});
  }

}
