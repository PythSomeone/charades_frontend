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
  dates: Array<string> = [];
  hours: Array<string> = [];

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
        if (this.refreshed === 'false') {
          localStorage.setItem('refreshed', 'true');
          location.reload();
        }
        this.statistics = [];
        this.games = games;
        this.games.forEach(game => {
          // @ts-ignore
          this.dates.push(game.created_at.slice(0, 10));
          // @ts-ignore
          this.hours.push(game.created_at.slice(11, 19));
          statisticsService.get(this.userID, game.id, game.category_id);
        });
        statisticsService.statisticObservable.subscribe(
          statistics => {
            let realGame = false;
            let max = 0;
            console.log(statistics.game.id);
            if (statistics.players.length < 3 ) {
              this.gameService.autoDelete(statistics.game.id);
            }
            statistics.players.forEach(player => {
              if ( player.points !== 0){
                realGame = true;
              }
              if (player.points > max) {
                max = player.points;
              }
            });
            if (!realGame){
              this.gameService.autoDelete(statistics.game.id);
            }
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
