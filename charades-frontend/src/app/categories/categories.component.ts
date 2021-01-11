import {Component, OnInit} from '@angular/core';
import {BasicCategoriesService} from '../_services/basic-categories.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {UserCategoriesService} from '../_services/user-categories.service';
import {UserCategoriesWithWordsService} from '../_services/user-categories-with-words.service';
import {GameService} from '../_services/game.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  showCategories = [];
  userID = localStorage.getItem('userID');

  constructor(private basicCategoriesService: BasicCategoriesService,
              private router: Router,
              private colorSchemeService: ColorSchemeService,
              private userCategoriesService: UserCategoriesService,
              private gameService: GameService,
              private snackBar: MatSnackBar,
              private userCategoriesWithWordsService: UserCategoriesWithWordsService) {
    colorSchemeService.load();
    localStorage.setItem('hideButton', 'false');
  }

  async ngOnInit(): Promise<void> {

    await this.userCategoriesWithWordsService.get(this.userID).then(
      categories => {
        this.showCategories = categories;
      });
  }

  back(): void {
    this.router.navigate(['p']);
  }

  toUserCategories(): void {
    this.router.navigate(['cm']);
  }

  toLobby(category: any): void {
    console.log(category);
    if (category.words === undefined || category.words.length < 5) {
      this.snackBar.open('To use category it has to have at least 5 words');
    } else {
      localStorage.setItem('ownCategory', 'true');
      localStorage.setItem('categoryID', category.id);
      this.gameService.create();
      this.router.navigate(['l']);
    }
  }
}
