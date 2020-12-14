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
  setUserCategories$ = this.userCategoriesSource.asObservable();



  constructor(private http: HttpClient,
              private dialog: MatDialog) {
    this.http.get('http://localhost:3000/categories/').subscribe(
      response => {
        // @ts-ignore
        this.setUserCategories(response.data);
      }
    );
  }


  setUserCategories(categories: Category[]): void {
    this.userCategoriesSource.next(categories);
  }

  createUserCategory(category: Category): void {
    this.http.post('http://localhost:3000/categories', category).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  getUserCategories(): Subscription {
    return this.http.get('http://localhost:3000/categories/').subscribe(
      response => {
        // @ts-ignore
        this.setUserCategories(response.data);
      }
    );
  }

  deleteUserCategory(id: string): void {
    this.http.delete('http://localhost:3000/categories/ ' + id).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  updateUserCategory(id: string, category: any): void {
    this.http.patch('http://localhost:3000/categories/ ' + id, category).subscribe(
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
