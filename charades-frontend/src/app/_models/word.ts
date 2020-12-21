export class Word {
  id: string;
  // tslint:disable-next-line:variable-name
  category_id: string;
  word: string;
  // tslint:disable-next-line:variable-name
  user_id: string;

  // tslint:disable-next-line:variable-name
  constructor(id: string, category_id: string, word: string, user_id: string) {
    this.id = id;
    this.category_id = category_id;
    this.word = word;
    this.user_id = user_id;
  }
}
