import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(): boolean {
    if (this.isLoggedIn()) {
      console.log('AuthGuard passed');
      return true;
    } else {
      console.log('AuthGuard not passed');
      return false;
    }
  }

  public isLoggedIn(): boolean {
    let status;
    status = localStorage.getItem('isLoggedIn') === 'true';
    return status;
  }
}
