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
  refreshed = 'false';
  maxes: Array<number> = [];

  constructor(private colorSchemeService: ColorSchemeService,
              private gameService: GameService,
              private  statisticsService: StatisticsService,
              private router: Router) {
    this.userID = localStorage.getItem('userID');
    this.refreshed = localStorage.getItem('refreshed');
    colorSchemeService.load();
    gameService.index();
    gameService.gamesObservable.subscribe(
      games => {
        if (this.refreshed === 'false'){
          localStorage.setItem('refreshed', 'true');
          location.reload();
        }
        this.statistics = [];
        this.games = games;
        this.games.forEach(game => {
          statisticsService.get(this.userID, game.id, game.category_id);
        });
        statisticsService.statisticObservable.subscribe(
          statistics => {
            let max = 0;
            statistics.players.forEach(player => {
              if (player.points > max){
                max = player.points;
              }
            });
            this.statistics.push(statistics);
            this.maxes.push(max);
          }
        );
      });
    console.log(this.statistics);
  }

  ngOnInit(): void {
  }

  toProfile(): void {
    this.router.navigate(['p']);
  }
}
