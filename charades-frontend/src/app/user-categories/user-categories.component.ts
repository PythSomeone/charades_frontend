import {Component, OnInit} from '@angular/core';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {Router} from '@angular/router';
import {UserCategoriesService} from '../_services/user-categories.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCategoryComponent} from '../dialogs/delete-category/delete-category.component';
import {EditCategoryComponent} from '../dialogs/edit-category/edit-category.component';
import {Category} from '../_models/category';
import {Word} from '../_models/word';
import {UserWordsService} from '../_services/user-words.service';
import {UserCategoriesWithWordsService} from '../_services/user-categories-with-words.service';
import {DeleteWordComponent} from '../dialogs/delete-word/delete-word.component';
import {EditWordComponent} from '../dialogs/edit-word/edit-word.component';
import {Translator} from '../translation';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss']
})
export class UserCategoriesComponent implements OnInit {
  userId = localStorage.getItem('userID');
  categories: any[];
  category = new Category('', '');
  newWord = new Word('', '', '', '');

  constructor(private colorSchemeService: ColorSchemeService,
              private router: Router,
              private userCategoriesService: UserCategoriesService,
              private userWordsService: UserWordsService,
              private userCategoriesWithWordsService: UserCategoriesWithWordsService,
              private dialog: MatDialog,
              public translator: Translator
  ) {
    colorSchemeService.load();
  }

  // tslint:disable-next-line:typedef
  async ngOnInit() {
    this.categories = await this.userCategoriesWithWordsService.get(this.userId);
    console.log(this.categories);
  }

  toProfile(): void {
    this.router.navigate(['p']);
  }

  createCategory(): void {
    this.category.user_id = localStorage.getItem('userID');
    this.userCategoriesService.create(this.category.user_id, this.category);
  }

  openDeleteCategory(category: any): void {
    this.dialog.open(DeleteCategoryComponent, {data: {category}});
  }


  openEditCategory(category: any): void {
    this.dialog.open(EditCategoryComponent, {data: {category}});
  }

  // tslint:disable-next-line:variable-name
  createWord(user_id: string, category_id: string, word: Word): void {
    this.userWordsService.create(user_id, category_id, word);
  }

  openEditWord(word: any): void {
    this.dialog.open(EditWordComponent, {data: {word}});
  }

  openDeleteWord(word: any): void {
    this.dialog.open(DeleteWordComponent, {data: {word}});
  }

  toGame(): void {
    this.router.navigate(['gc']);
  }

}
