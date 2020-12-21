export class Player {
  host_id: string;
  name: string;
  points: string;

  constructor(host_id: string, name: string, points: string) {
    this.host_id = host_id;
    this.name = name;
    this.points = points;
  }
}
