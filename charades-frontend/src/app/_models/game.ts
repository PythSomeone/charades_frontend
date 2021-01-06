export class Game {
  id: string;
  user_id: string;
  category_id: string;

  constructor(user_id: string, category_id: string) {
    this.user_id = user_id;
    this.category_id = category_id;
  }
}
