import {HttpClient} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {UserCategoriesService} from './user-categories.service';
import {Category} from '../_models/category';
import {UserWordsService} from './user-words.service';

@Injectable({providedIn: 'root'})
export class BasicCategoriesService {

  private animals;
  private games;
  private movies;
  private category: Category;

  constructor(private http: HttpClient,
              private userCategoriesService: UserCategoriesService,
              private userWordsService: UserWordsService) {
    this.category = new Category('', '');
  }


  getAnimals(): any {
    return this.animals;
  }

  getGames(): any {
    return this.games;
  }

  getMovies(): any {
    return this.movies;
  }

  load(user_id: string): void {
    this.http.get('http://localhost:3000/basic_words').subscribe(
      response => {
        // @ts-ignore
        this.animals = response.data.slice(0, 20);
        // @ts-ignore
        this.games = response.data.slice(21, 40);
        // @ts-ignore
        this.movies = response.data.slice(41, 60);

        this.category.name = 'Animals';
        this.category.user_id = user_id;
        this.userCategoriesService.quietCreate(user_id, this.category);
        this.userCategoriesService.UserCategoriesObservable.subscribe(
          category => {
            console.log(category);
            // @ts-ignore
            if (category.name === 'Animals') {
              this.animals.forEach(word => {
                // @ts-ignore
                this.userWordsService.quietCreate(user_id, category.id, word);
              });
            }
          });
        this.category.name = 'Movies';
        this.userCategoriesService.quietCreate(user_id, this.category);
        this.userCategoriesService.UserCategoriesObservable.subscribe(
          category => {
            // @ts-ignore
            if (category.name === 'Movies') {
              this.movies.forEach(word => {
                // @ts-ignore
                this.userWordsService.quietCreate(user_id, category.id, word);
              });
            }
          });
        this.category.name = 'Video Games';
        this.userCategoriesService.quietCreate(user_id, this.category);
        this.userCategoriesService.UserCategoriesObservable.subscribe(
          category => {
            // @ts-ignore
            if (category.name === 'Video Games') {
              this.games.forEach(word => {
                // @ts-ignore
                this.userWordsService.quietCreate(user_id, category.id, word);
              });
            }
          });
      });
  }
}
