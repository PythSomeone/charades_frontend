import {Component, OnInit} from '@angular/core';
import {BasicCategoriesService} from '../_services/basic-categories.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {UserCategoriesComponent} from '../user-categories/user-categories.component';
import {UserCategoriesService} from '../_services/user-categories.service';
import {Categories} from '../_models/categories';
import {GameService} from '../_services/game.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  userCategories = [];
  userID = localStorage.getItem('userID');

  constructor(private basicCategoriesService: BasicCategoriesService,
              private router: Router,
              private colorSchemeService: ColorSchemeService,
              private userCategoriesService: UserCategoriesService,
              private gameService: GameService) {
    colorSchemeService.load();
  }

  ngOnInit(): void {
    this.userCategoriesService.index(this.userID);
    this.userCategoriesService.UserCategoriesObservable.subscribe(
      categories => {
        this.userCategories = categories;
      });
  }

  back(): void {
    this.router.navigate(['p']);
  }

  toUserCategories(): void {
    this.router.navigate(['cm']);
  }

  toLobby(category: any): void {
    switch (category) {
      case 'Animals': {
        localStorage.setItem('ownCategory', 'false');
        localStorage.setItem('categoryID', 'Animals');
        break;
      }
      case 'Video Games': {
        localStorage.setItem('ownCategory', 'false');
        localStorage.setItem('categoryID', 'Video Games');
        break;
      }
      case 'Movies': {
        localStorage.setItem('ownCategory', 'false');
        localStorage.setItem('categoryID', 'Movies');
        break;
      }
      default: {
        localStorage.setItem('ownCategory', 'true');
        localStorage.setItem('categoryID', category);
        break;
      }
    }
    this.gameService.create();
    this.router.navigate(['l']);
  }
}
