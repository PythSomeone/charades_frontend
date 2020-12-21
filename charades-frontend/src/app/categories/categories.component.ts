import {Component, OnInit} from '@angular/core';
import {BasicCategoriesService} from '../_services/basic-categories.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {UserCategoriesComponent} from '../user-categories/user-categories.component';
import {UserCategoriesService} from '../_services/user-categories.service';
import {Categories} from '../_models/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  userCategories = [];
  userID = localStorage.getItem('userID');
  animals: object;

  constructor(private basicCategoriesService: BasicCategoriesService,
              private router: Router,
              private colorSchemeService: ColorSchemeService,
              private userCategoriesService: UserCategoriesService) {
    colorSchemeService.load();
  }

  ngOnInit(): void {
    this.userCategoriesService.index(this.userID);
    this.userCategoriesService.UserCategoriesObservable.subscribe(
      categories => {
        this.userCategories = categories;
      });
  }

  listAnimals(): void {
    this.animals = this.basicCategoriesService.getAnimals();
  }


  back(): void {
    this.router.navigate(['p']);
  }

  toUserCategories(): void {
    this.router.navigate(['cm']);
  }

  toLobby(category: any): void {
    switch (category) {
      case 0: {
        localStorage.setItem('ownCategory', 'false');
        localStorage.setItem('categoryID', '0');
        break;
      }
      case 1: {
        localStorage.setItem('ownCategory', 'false');
        localStorage.setItem('categoryID', '1');
        break;
      }
      case 2: {
        localStorage.setItem('ownCategory', 'false');
        localStorage.setItem('categoryID', '2');
        break;
      }
      default: {
        localStorage.setItem('ownCategory', 'true');
        localStorage.setItem('categoryID', category);
        break;
      }
    }
    this.router.navigate(['l']);
  }
}
