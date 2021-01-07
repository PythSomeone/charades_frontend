import {Component, OnInit} from '@angular/core';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {GameService} from '../_services/game.service';
import {Game} from '../_models/game';
import {Router} from '@angular/router';
import {StatisticsService} from '../_services/statistics.service';

@Component({
  selector: 'app-history-and-statistics',
  templateUrl: './history-and-statistics.component.html',
  styleUrls: ['./history-and-statistics.component.scss']
})
export class HistoryAndStatisticsComponent implements OnInit {

  games: Array<Game> = [];
  statistics: Array<any> = [];
  userID;
  categoryID;
  gameID;

  constructor(private colorSchemeService: ColorSchemeService,
              private gameService: GameService,
              private  statisticsService: StatisticsService,
              private router: Router) {
    this.userID = localStorage.getItem('userID');
    colorSchemeService.load();
    gameService.index();
    gameService.gamesObservable.subscribe(
      games => {
        this.statistics = [];
        this.games = games;
        this.games.forEach(game => {
          statisticsService.get(this.userID, game.id, game.category_id);
        });
        statisticsService.statisticObservable.subscribe(
          statistics => {
            this.statistics.push(statistics);
          }
        );
      });
  }

  ngOnInit(): void {
  }

  toProfile(): void {
    this.router.navigate(['p']);
  }
}
