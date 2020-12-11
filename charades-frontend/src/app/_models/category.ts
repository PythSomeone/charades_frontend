export class Category {
  name: string;
  // tslint:disable-next-line:variable-name
  user_id: string;

  // tslint:disable-next-line:variable-name
  constructor(name: string, user_id: string) {
    this.name = name;
    this.user_id = user_id;
  }
}
