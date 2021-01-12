import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../_models/player';
import {Word} from '../_models/word';
import {Category} from '../_models/category';
import {UserCategoriesService} from '../_services/user-categories.service';
import {BasicCategoriesService} from '../_services/basic-categories.service';
import {UserWordsService} from '../_services/user-words.service';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {PlayerService} from '../_services/player.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {EndGameComponent} from '../dialogs/end-game/end-game.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  host = new Player('', 0);
  word = new Word('', '', '', '');
  category = new Category('', '');

  categoryID = localStorage.getItem('categoryID');
  ownCategory = localStorage.getItem('ownCategory');
  userID = localStorage.getItem('userID');
  gameID = localStorage.getItem('gameID');
  wordID: string;
  players: Array<Player> = [];
  inTurn = true;
  words: Array<any> = [];
  private random: number;
  private playerSubscribe: Subscription;
  private wordsSubscribe: Subscription;
  seconds = '00';
  minutes = 0;
  timeEnd = false;
  interval: any;
  gaveUp = false;

  constructor(
    private userCategoriesService: UserCategoriesService,
    private basicCategoriesService: BasicCategoriesService,
    private userWordsService: UserWordsService,
    private colorSchemeService: ColorSchemeService,
    private playerService: PlayerService,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.random = 0;
    const time = parseInt(localStorage.getItem('gameLength'), 10);
    this.Countdown(time);
    this.host.name = localStorage.getItem('hostname');
    this.colorSchemeService.load();
    this.playerService.index(this.gameID);
    this.playerSubscribe = this.playerService.playersObservable.subscribe(
      players => {
        this.players = players;
        this.inTurn = true;
        this.players.forEach(player => {
          if (player.points === null) {
            player.points = 0;
          }
        });
      }
    );
    this.category.name = localStorage.getItem('categoryName');
    this.userWordsService.index(this.userID, this.categoryID);
    this.wordsSubscribe = this.userWordsService.userCategoryWordsObservable.subscribe(
      words => {
        this.words = words;
        this.random = this.getRandomInt(0, this.words.length);
        this.word = words[this.random];
        console.log(words);
      });
  }

  ngOnDestroy(): void {
    this.playerSubscribe.unsubscribe();
    this.wordsSubscribe.unsubscribe();
  }

  ngOnInit(): void {
  }

  addPoints(player: Player): void {
    this.random = this.getRandomInt(0, this.words.length);
    player.points++;
    this.inTurn = false;
    this.host.name = player.name;
    this.word = this.words[this.random];
    this.playerService.update(this.gameID, player.id, player);
    clearInterval(this.interval);
    localStorage.setItem('hostname', player.name);
  }


  ready(): void {
    this.inTurn = true;
    location.reload();
  }


  giveUp(): void {
    this.gaveUp = true;
    this.inTurn = false;
    this.timeEnd = true;
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    while (randomNumber === this.random) {
      randomNumber = Math.floor(Math.random() * (max - min)) + min;
    }
    this.random = randomNumber;
    return randomNumber;
  }

  endGame(): void {
    this.dialog.open(EndGameComponent, {});
  }

  Countdown(seconds: number): void {
    let counter: number;
    counter = seconds;

    this.minutes = parseInt(String(counter / 60), 10);
    counter = counter - (this.minutes * 60);

    this.interval = setInterval(() => {
      if (counter < 10) {
        this.seconds = ('0' + counter);
      } else {
        this.seconds = counter.toString();
      }

      counter--;

      if (counter < 0) {
        if (counter < 0 && this.minutes === 0) {
          clearInterval(this.interval);
          this.timeEnd = true;
          this.inTurn = false;
        } else {
          counter = 59;
          this.minutes--;
        }
      }
    }, 1000);
  }

  nextTurn(): void {
    location.reload();
  }
}
