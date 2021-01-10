import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Game} from '../_models/game';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {Player} from '../_models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  categoryID: string;
  gameID: string;
  userID: string;
  apiURL: string;
  game: Game;
  gamesSource = new Subject<Game[]>();
  gamesObservable = this.gamesSource.asObservable();


  constructor(private http: HttpClient,
              private router: Router) {
    this.categoryID = localStorage.getItem('categoryID');
    this.gameID = localStorage.getItem('gameID');
    this.userID = localStorage.getItem('userID');
    this.apiURL = 'http://localhost:3000/user/' + this.userID + '/games';
    this.game = new Game(this.userID, this.categoryID);
  }

  setGames(games: Game[]): void {
    this.gamesSource.next(games);
  }

  index(): void {
    this.http.get(this.apiURL).subscribe(
      response => {
        // @ts-ignore
        this.setGames(response.data);
      });
  }

  get(game_id: string): void {
    this.http.get(this.apiURL + '/' + game_id);
  }

  create(): void {
    this.http.post(this.apiURL, this.game).subscribe(
      response => {
        // @ts-ignore
        console.log(response.data);
        // @ts-ignore
        localStorage.setItem('gameID', response.data.id);
      });
  }

  delete(): void {
    this.gameID = localStorage.getItem('gameID');
    this.http.delete(this.apiURL + '/' + this.gameID).subscribe(
      response => {
        // @ts-ignore
        localStorage.removeItem('gameID');
        this.router.navigate(['gc']);
      },
      error => {
        console.log(error);
      }
    );
  }


  autoDelete(game_id: string): void {
    this.http.delete(this.apiURL + '/' + game_id).subscribe(
      response => {
        // @ts-ignore
        localStorage.removeItem('gameID');
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

}
