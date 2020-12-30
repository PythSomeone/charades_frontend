import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from '../_models/player';
import {Subject, Subscription} from 'rxjs';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  userID = localStorage.getItem('userID');
  apiURL = 'http://localhost:3000/user/' + this.userID;

  playersSource = new Subject<Player[]>();
  playersObservable = this.playersSource.asObservable();

  constructor(private http: HttpClient) {
  }

  async index(game_id: string): Promise<Subscription> {
    return this.http.get(this.apiURL + '/games/' + game_id + '/players').subscribe(
      response => {
        // @ts-ignore
        this.setPlayers(response.data);
      }
    );
  }

  setPlayers(players: Player[]): void {
    this.playersSource.next(players);
  }

  get(game_id: string, player_id: string): void {
    this.http.get(this.apiURL + '/games/' + game_id + '/players/' + player_id);
  }

  create(game_id: string, player: Player): void {
    this.http.post(this.apiURL + '/games/' + game_id + '/players', player).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => console.log(error)
    );
  }

  delete(game_id: string, player_id: string): void {
    this.http.delete(this.apiURL + '/games/' + game_id + '/players/' + player_id).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => console.log(error)
    );
    ;
  }

}
