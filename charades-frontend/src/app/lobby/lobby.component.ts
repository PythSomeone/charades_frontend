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
  repeats = false;
  showAdd = 'true';
  refreshed = 'false';
  category: any = new Categories('', '', '', []);

  constructor(private userCategoriesService: UserCategoriesService,
              private basicCategoriesService: BasicCategoriesService,
              private colorSchemeService: ColorSchemeService,
              private gameService: GameService,
              private playerService: PlayerService,
              private router: Router,
              private snackBar: MatSnackBar) {
    localStorage.setItem('showAdd', 'false');
    this.refreshed = localStorage.getItem('refreshed');
    this.categoryID = localStorage.getItem('categoryID');
    this.ownCategory = localStorage.getItem('ownCategory');
    this.userID = localStorage.getItem('userID');
    this.gameID = localStorage.getItem('gameID');
    colorSchemeService.load();
    this.playerService.index(this.gameID);
    this.playerService.playersObservable.subscribe(
      players => {
        this.players = players;
        if (this.players.length >= 8) {
          this.refreshed = localStorage.getItem('refreshed');
          if (this.refreshed === 'false'){

            localStorage.setItem('refreshed', 'true');
            location.reload();
          }
          localStorage.setItem('showAdd', 'false');
        } else {
          localStorage.setItem('showAdd', 'true');
        }
        this.showAdd = localStorage.getItem('showAdd');
      },
      error => {
        this.showAdd = localStorage.getItem('showAdd');
        localStorage.setItem('showAdd', 'false');
      });

  }

  ngOnInit(): void {
    console.log(this.players.length);

    this.categoryID = localStorage.getItem('categoryID');
    this.userCategoriesService.get(this.userID, this.categoryID);
    this.userCategoriesService.UserCategoriesObservable.subscribe(
      category => {

        this.category = category;
        localStorage.setItem('categoryName', this.category.name);
      });

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
    if (this.players[0] !== undefined) {
      for (const element of this.players) {
        if (player.name === element.name) {
          this.repeats = true;
          break;
        } else {
          this.repeats = false;
        }
      }
      if (this.repeats) {
        this.openSnackBar('The name is already in use!', 'Close');
      } else {
        this.playerService.create(this.gameID, player);
      }
    } else {
      console.log('ultimate noob');
      this.playerService.create(this.gameID, player);
    }
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
    if (this.category.words.length > 5) {
      this.router.navigate(['g']);
    } else {
      this.openSnackBar('Too small number of words on this category! ', 'Close');
    }
  }
}
