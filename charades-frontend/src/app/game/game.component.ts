import {Component, OnInit} from '@angular/core';
import {Player} from '../_models/player';
import {Word} from '../_models/word';
import {Category} from '../_models/category';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
/*
Getowanie hasła, kategorii i graczy z bazy, z użyciem serwisow (basic-categories, user-categories, player, game)
Losowanie hasła po kliknięciu przucisku z nazwą gracza lub GIVE UP
Przy naciśnięciu END GAME push do bazy z wynikami gry

Tłumaczenie
Ekran podsumowania
*/
export class GameComponent implements OnInit {
  host = new Player('', 0);
  word = new Word('', '', '', '');
  category = new Category('', '');

  players: Array<Player> = [];
  inTurn = true;

  constructor() {
    this.inTurn = true;
    this.players.forEach(player => {
      if (player.points === null) {
        player.points = 0;
      }
    });
    
  }

  ngOnInit(): void {
  }

  addPoints(player: Player): void {
    player.points++;
    this.inTurn = false;
    this.host.name = player.name;
  }

  endGame(): void {

  }

  ready(): void {
    this.inTurn = true;
  }

  giveUp(): void {

  }
}
