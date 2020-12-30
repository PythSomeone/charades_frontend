import {Component, OnInit} from '@angular/core';
import {UserCategoriesService} from '../_services/user-categories.service';
import {BasicCategoriesService} from '../_services/basic-categories.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {Categories} from '../_models/categories';
import {Player} from '../_models/player';
import {GameService} from '../_services/game.service';
import {PlayerService} from '../_services/player.service';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  players: Array<Player> = [];
  player = new Player('', '');
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
    colorSchemeService.load();
    this.playerService.index(this.gameID);
    this.playerService.playersObservable.subscribe(
      players => this.players = players
    );
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
    if (this.players.length >= 2) {
      this.router.navigate(['g']);
    } else {
      this.openSnackBar('Needed at least 2 players', '');
    }
  }
}
