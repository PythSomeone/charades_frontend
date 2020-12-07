import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Sign_in } from '../_models/sign_in';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get<Sign_in[]>(`${environment.apiUrl}/users`);
  }
}
