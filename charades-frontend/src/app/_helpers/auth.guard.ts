import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '@app/_services/authentication.service';

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
      this.router.navigate(['login']);
      return false;
    }
  }

  public isLoggedIn(): boolean {
    let status;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}
