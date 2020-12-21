import {Component, OnInit} from '@angular/core';
import {UserCategoriesService} from '../_services/user-categories.service';
import {BasicCategoriesService} from '../_services/basic-categories.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {Categories} from '../_models/categories';
import {Player} from '../_models/player';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  player = new Player('', '', '');
  categoryID = localStorage.getItem('categoryID');
  ownCategory = localStorage.getItem('ownCategory');
  userID = localStorage.getItem('userID');
  category: any = new Categories('', '', '', []);

  constructor(private userCategoriesService: UserCategoriesService,
              private basicCategoriesService: BasicCategoriesService,
              private router: Router,
              private colorSchemeService: ColorSchemeService) {
    colorSchemeService.load();
  }

  ngOnInit(): void {
    if (this.ownCategory === 'true') {
      this.userCategoriesService.get(this.userID, this.categoryID);
      this.userCategoriesService.UserCategoriesObservable.subscribe(
        category => {
          this.category = category;
        });
      {
      }
    } else {
      switch (this.categoryID) {
        case '0': {
          this.category.name = 'Animals';
          break;
        }
        case '1': {
          this.category.name = 'Video Games';
          break;
        }
        case '2': {
          this.category.name = 'Movies';
          break;
        }
      }

    }
  }

  toCategories(): void {
    this.router.navigate(['gc']);
  }

  addPlayer(): void {
  }
}
