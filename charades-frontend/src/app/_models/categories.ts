export class Categories {
  id: string;
  user_id: string;
  name: string;
  words: any[];

  constructor(id: string, user_id: string, name: string, words: any[]) {
    this.id = id;
    this.user_id = user_id;
    this.name = name;
    this.words = words;
  }
}
