import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../_models/category';
import {Subject, Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UserCategoriesService {
  userCategoriesSource = new Subject<Category[]>();
  UserCategoriesObservable = this.userCategoriesSource.asObservable();


  constructor(private http: HttpClient,
              private dialog: MatDialog) {
  }


  setUserCategories(categories: Category[]): void {
    this.userCategoriesSource.next(categories);
  }

  create(userID: string, category: Category): void {
    this.http.post('http://localhost:3000/user/' + userID + '/categories', category).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  get(userID: string): Subscription {
    return this.http.get('http://localhost:3000/user/' + userID + '/categories').subscribe(
      response => {
        // @ts-ignore
        this.setUserCategories(response.data);
      }
    );
  }

  delete(userID: string, id: string): void {
    this.http.delete('http://localhost:3000/user/' + userID + '/categories/ ' + id).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  update(userID: string, id: string, category: any): void {
    this.http.patch('http://localhost:3000/user/' + userID + '/categories/ ' + id, category).subscribe(
      response => {
        console.log(response);
        this.dialog.closeAll();
      },
      error => {
        console.log(error);
      }
    );
  }

}
