import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class StatisticsService {
  statisticsSource = new Subject<any>();
  statisticObservable = this.statisticsSource.asObservable();

  constructor(
    private http: HttpClient
  ) {
  }

  setStatistic(statistics: any): void {
    this.statisticsSource.next(statistics);
  }

  get(user_id: string, game_id: string, category_id: string): void {
    this.http.post('http://localhost:3000/user/' + user_id + '/statistics', {'game_id': game_id, 'category_id': category_id}).subscribe(
      response => {
        // @ts-ignore
        this.setStatistic(response.data);
      }
    );
  }


}
