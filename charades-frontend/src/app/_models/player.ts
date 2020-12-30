export class Player {
  game_id: string;
  id: string;
  name: string;
  points: string;

  constructor(name: string, points: string) {
    this.name = name;
    this.points = points;
  }
}
