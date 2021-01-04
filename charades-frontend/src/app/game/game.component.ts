import {Component, OnInit} from '@angular/core';
import {Player} from '../_models/player';
import {Word} from '../_models/word';
import {Category} from '../_models/category';
import {UserCategoriesService} from '../_services/user-categories.service';
import {BasicCategoriesService} from '../_services/basic-categories.service';
import {UserWordsService} from '../_services/user-words.service';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {PlayerService} from '../_services/player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
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

  constructor(
    private userCategoriesService: UserCategoriesService,
    private basicCategoriesService: BasicCategoriesService,
    private userWordsService: UserWordsService,
    private colorSchemeService: ColorSchemeService,
    private playerService: PlayerService,
    private router: Router
  ) {
    this.random = 0;

    this.colorSchemeService.load();
    this.playerService.index(this.gameID);
    this.playerService.playersObservable.subscribe(
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
    if (this.ownCategory === 'true') {
      this.category.name = localStorage.getItem('categoryName');
      this.userWordsService.index(this.userID, this.categoryID);
      this.userWordsService.userCategoryWordsObservable.subscribe(
        words => {
          this.words = words;
          this.random = this.getRandomInt(0, this.words.length);
          this.word = words[this.random];
          console.log(words);
        });
    } else {

      switch (this.categoryID) {
        case 'Animals': {
        this.category.name = 'Animals';
        this.words = this.basicCategoriesService.getAnimals();
        this.random = this.getRandomInt(0, this.words.length);
        this.word = this.words[this.random];
        break;
      }
        case 'Video Games': {
          this.category.name = 'Video Games';
          this.words = this.basicCategoriesService.getGames();
          this.random = this.getRandomInt(0, this.words.length);
          this.word = this.words[this.random];
          break;
        }
        case 'Movies': {
          this.category.name = 'Movies';
          this.words = this.basicCategoriesService.getMovies();
          this.random = this.getRandomInt(0, this.words.length);
          this.word = this.words[this.random];
          break;
        }
      }
    }

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
  }

  endGame(): void {
    this.router.navigate(['r']);
  }

  ready(): void {
    this.inTurn = true;
  }


  giveUp(): void {
    this.word = this.words[this.getRandomInt(0, this.words.length)];
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    while (randomNumber === this.random){
      randomNumber = Math.floor(Math.random() * (max - min)) + min;
    }
    this.random = randomNumber;
    return randomNumber;
  }
}
