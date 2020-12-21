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

  // tslint:disable-next-line:typedef
  get(userID: string, categoryID: string) {
    return this.http.get<Categories[]>('http://localhost:3000/user/' + userID + '/categories/' + categoryID + '/words').subscribe(
      response => {
        // @ts-ignore
        this.setUserCategoryWords(response.data);
      }
    );
  }

  // tslint:disable-next-line:variable-name
  create(user_id: string, category_id: string, word: any): void {
    this.http.post('http://localhost:3000/user/' + user_id + '/categories/' + category_id + '/words', word).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line:variable-name
  delete(user_id: string, category_id: string, id: string): void {
    this.http.delete('http://localhost:3000/user/' + user_id + '/categories/' + category_id + '/words/' + id).subscribe(
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

  // tslint:disable-next-line:variable-name
  update(user_id: string, category_id: string, id: string, word: any): void {
    this.http.patch('http://localhost:3000/user/' + user_id + '/categories/ ' + category_id + '/words/' + id, word).subscribe(
      response => {
        this.dialog.closeAll();
      },
      error => {
        console.log(error);
      }
    );
  }


}
