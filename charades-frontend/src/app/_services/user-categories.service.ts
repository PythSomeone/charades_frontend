import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../_models/category';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserCategoriesService {
  userCategories;


  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
    this.http.get('http://localhost:3000/categories/').subscribe(
      response => {
        // @ts-ignore
        this.userCategories = response.data;
      }
    );
  }


  getUsersCategories(): any {
    return this.userCategories;
  }

  createUsersCategory(category: Category): void {
    this.http.post('http://localhost:3000/categories', category).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
