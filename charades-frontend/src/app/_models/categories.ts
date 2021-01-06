export class Categories {
  id: string;
  // tslint:disable-next-line:variable-name
  user_id: string;
  name: string;
  created_at: string;
  words: any[];

  // tslint:disable-next-line:variable-name
  constructor(id: string, user_id: string, name: string, words: any[]) {
    this.id = id;
    this.user_id = user_id;
    this.name = name;
    this.words = words;
  }
}
