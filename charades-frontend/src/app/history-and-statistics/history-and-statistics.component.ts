import {Component, OnInit} from '@angular/core';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {GameService} from '../_services/game.service';
import {Game} from '../_models/game';
import {UserCategoriesService} from '../_services/user-categories.service';
import {Router} from '@angular/router';
import {Category} from '../_models/category';
import {PlayerService} from '../_services/player.service';
import {Player} from '../_models/player';
import {Statistics} from '../_models/statistics';

@Component({
  selector: 'app-history-and-statistics',
  templateUrl: './history-and-statistics.component.html',
  styleUrls: ['./history-and-statistics.component.scss']
})
export class HistoryAndStatisticsComponent implements OnInit {

  games: Array<Game> = [];
  categories: Array<Category> = [];
  players: Array<Player> = [];
  statistics: Array<Statistics> = [];
  userID;
  private stat = new Statistics([], []);


  constructor(private colorSchemeService: ColorSchemeService,
              private gameService: GameService,
              private categoryService: UserCategoriesService,
              private playerService: PlayerService,
              private router: Router) {
    this.userID = localStorage.getItem('userID');
    colorSchemeService.load();
    gameService.index();
    gameService.gamesObservable.subscribe(
      games => {
        this.games = games;
        this.games.forEach(game => {
          this.categoryService.get(this.userID, game.category_id);
          this.playerService.index(game.id);
        });
        this.categoryService.UserCategoriesObservable.subscribe(
          category => {
            this.categories = category;
            this.playerService.playersObservable.subscribe(
              players => {
                this.players = players;
                console.log(games[0].user_id === this.userID);
                if (games[0].user_id === this.userID ) {
                  console.log('Chuj ci na pizde');

                  this.stat = new Statistics(this.categories, this.players);
                  this.statistics.push(this.stat);
                }
              });
          });
      });
  }

  ngOnInit(): void {
  }

  toProfile(): void {
    this.router.navigate(['p']);
  }
}
