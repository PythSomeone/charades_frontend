// tslint:disable-next-line:class-name
export class Sign_up {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;


  constructor(username, email, password, password_confirmation) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.password_confirmation = password_confirmation;
  }
}
