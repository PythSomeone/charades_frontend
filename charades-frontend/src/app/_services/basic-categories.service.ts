import {HttpClient} from '@angular/common/http';

import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class BasicCategoriesService {

  private animals;
  private games;
  private movies;
  private random;

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/basic_words').subscribe(
      response => {
        // @ts-ignore
        this.animals = response.data.slice(0, 20);
        // @ts-ignore
        this.games = response.data.slice(21, 40);
        // @ts-ignore
        this.movies = response.data.slice(41, 60);
        // @ts-ignore
        this.random = response.data;
              }
    );
  }


  getAnimals(): any {
    return this.animals;
  }

  getGames(): any {
    return this.games;
  }

  getMovies(): any {
    return this.movies;
  }

  getRandom(): any{
    return this.random;
  }

}
