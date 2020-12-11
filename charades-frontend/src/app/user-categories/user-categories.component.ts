import {Component, OnInit} from '@angular/core';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {Router} from '@angular/router';
import {UserCategoriesService} from '../_services/user-categories.service';
import {Category} from '../_models/category';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss']
})
export class UserCategoriesComponent implements OnInit {
  userId = localStorage.getItem('userID');
  category = new Category('', this.userId);
  categories;

  constructor(private colorSchemeService: ColorSchemeService,
              private router: Router,
              private userCategoriesService: UserCategoriesService,
              ) {
    colorSchemeService.load();
    this.categories = this.userCategoriesService.getUsersCategories();

  }

  ngOnInit(): void {
  }

  toProfile(): void {
    this.router.navigate(['p']);
  }

  createCategory(): void {
    this.userCategoriesService.createUsersCategory(this.category);
  }


}
