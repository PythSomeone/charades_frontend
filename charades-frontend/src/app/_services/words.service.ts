import {Subject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  userCategoryWordsSource = new Subject<any[]>();
  setUserCategoryWords$ = this.userCategoryWordsSource.asObservable();

  constructor(private http: HttpClient) {
  }

  setUserCategoryWords(words: any): void {
    this.userCategoryWordsSource.next(words);
  }

  getUserCategoryWords(id: string): Subscription {
    return this.http.get('http://localhost:3000/categories/' + id + '/words').subscribe(
      response => {
        // @ts-ignore
        this.setUserCategoryWords(response.data);
      }
    );
  }

  createUserCategoryWord(id: string, word: any): void {
    this.http.post('http://localhost:3000/categories' + id + '/words', word).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteUserCategoryWord(id: string): void {
    this.http.delete('http://localhost:3000/categories/ ' + id).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  updateUserCategoryWord(id: string, category: any): void {
    this.http.patch('http://localhost:3000/categories/ ' + id, category).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }


}
