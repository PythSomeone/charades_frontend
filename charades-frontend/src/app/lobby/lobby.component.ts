import {Component, OnInit} from '@angular/core';
import {UserCategoriesService} from '../_services/user-categories.service';
import {BasicCategoriesService} from '../_services/basic-categories.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {Categories} from '../_models/categories';
import {Player} from '../_models/player';
import {GameService} from '../_services/game.service';
import {PlayerService} from '../_services/player.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  players: Array<Player> = [];
  player = new Player('', 0);
  categoryID = localStorage.getItem('categoryID');
  ownCategory = localStorage.getItem('ownCategory');
  userID = localStorage.getItem('userID');
  gameID = localStorage.getItem('gameID');
  category: any = new Categories('', '', '', []);

  constructor(private userCategoriesService: UserCategoriesService,
              private basicCategoriesService: BasicCategoriesService,
              private colorSchemeService: ColorSchemeService,
              private gameService: GameService,
              private playerService: PlayerService,
              private router: Router,
              private snackBar: MatSnackBar) {

    this.categoryID = localStorage.getItem('categoryID');
    this.ownCategory = localStorage.getItem('ownCategory');
    this.userID = localStorage.getItem('userID');
    this.gameID = localStorage.getItem('gameID');

    colorSchemeService.load();
    this.playerService.index(this.gameID);
    this.playerService.playersObservable.subscribe(
      players => this.players = players
    );
  }

  ngOnInit(): void {
    this.categoryID = localStorage.getItem('categoryID');
    this.ownCategory = localStorage.getItem('ownCategory');
    if (this.ownCategory === 'true') {
      this.userCategoriesService.get(this.userID, this.categoryID);
      this.userCategoriesService.UserCategoriesObservable.subscribe(
        category => {
          this.category = category;
          localStorage.setItem('categoryName', this.category.name);
        });
    } else {
      switch (this.categoryID) {
        case 'Animals': {
          this.category.name = 'Animals';
          break;
        }
        case 'Video Games': {
          this.category.name = 'Video Games';
          break;
        }
        case 'Movies': {
          this.category.name = 'Movies';
          break;
        }
      }
    }
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  toCategories(): void {
    this.gameService.delete();
  }

  add(player: Player): void {
    this.gameID = localStorage.getItem('gameID');
    this.playerService.create(this.gameID, player);
  }

  remove(player: Player): void {
    this.playerService.delete(player.game_id, player.id);
  }

  start(): void {
    if (this.players.length > 2) {
      this.router.navigate(['g']);
    } else {
      this.openSnackBar('At least 3 players needed', 'Close');
    }
  }
}
