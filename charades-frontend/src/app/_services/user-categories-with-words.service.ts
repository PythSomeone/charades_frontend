import {UserCategoriesService} from './user-categories.service';
import {UserWordsService} from './user-words.service';
import {Injectable} from '@angular/core';
import {Word} from '../_models/word';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserCategoriesWithWordsService {
  constructor(private userCategoriesService: UserCategoriesService,
              private userWordsService: UserWordsService) {
  }

  userCategories: Array<any> = [];
  userCategoriesWithWords: Array<any> = [];

  // tslint:disable-next-line:variable-name typedef
  async get(user_id: string) {
    this.userCategoriesService.get(user_id);
    this.userCategoriesService.UserCategoriesObservable.subscribe(
      (categories) => {
        this.userCategories = categories;
        this.userCategories.forEach(category => {
          this.userWordsService.get(user_id, category.id);
        });
        this.userWordsService.userCategoryWordsObservable.subscribe(
          words => {
            this.userCategories.forEach((category, index) => {
              if ( words[0].category_id === category.id) {
                category.words = words;
              }
              this.userCategoriesWithWords[index] = category;
            });

          });
      });
    return this.userCategoriesWithWords;
  }
}
