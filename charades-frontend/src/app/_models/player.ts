export class Player {
  game_id: string;
  id: string;
  name: string;
  points: number;

  constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
  }
}
