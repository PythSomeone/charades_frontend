import {Category} from './category';
import {Player} from './player';

export class Statistics {
  category: Category;
  players: Array<Player[]>;

  constructor(category: Category, players: Array<Player[]>) {
    this.category = category;
    this.players = players;
  }
}
