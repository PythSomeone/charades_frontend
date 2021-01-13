import {Observable, Subject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Categories} from '../_models/categories';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UserWordsService {
  userCategoryWordsSource = new Subject<any[]>();
  userCategoryWordsObservable = this.userCategoryWordsSource.asObservable();

  constructor(private http: HttpClient,
              private dialog: MatDialog) {
  }

  setUserCategoryWords(words: any[]): void {
    this.userCategoryWordsSource.next(words);
  }

  index(userID: string, categoryID: string): Subscription {
    return this.http.get<Categories[]>('https://charades-with-friends-api.herokuapp.com/user/' + userID + '/categories/' + categoryID + '/words').subscribe(
      response => {
        // @ts-ignore
        this.setUserCategoryWords(response.data);
      }
    );
  }

  get(userID: string, categoryID: string, wordID: string): Subscription {
    return this.http.get<Categories[]>('https://charades-with-friends-api.herokuapp.com/user/' + userID + '/categories/' + categoryID + '/words/' + wordID).subscribe(
      response => {
        // @ts-ignore
        this.setUserCategoryWords(response.data);
      }
    );
  }

  create(user_id: string, category_id: string, word: any): void {
    this.http.post('https://charades-with-friends-api.herokuapp.com/user/' + user_id + '/categories/' + category_id + '/words', word).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  quietCreate(user_id: string, category_id: string, word: any): void {
    this.http.post('https://charades-with-friends-api.herokuapp.com/user/' + user_id + '/categories/' + category_id + '/words', word).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  delete(user_id: string, category_id: string, id: string): void {
    this.http.delete('https://charades-with-friends-api.herokuapp.com/user/' + user_id + '/categories/' + category_id + '/words/' + id).subscribe(
      response => {
        console.log(response);
        this.dialog.closeAll();
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  update(user_id: string, category_id: string, id: string, word: any): void {
    this.http.patch('https://charades-with-friends-api.herokuapp.com/user/' + user_id + '/categories/ ' + category_id + '/words/' + id, word).subscribe(
      response => {
        this.dialog.closeAll();
      },
      error => {
        console.log(error);
      }
    );
  }


}
