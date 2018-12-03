import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceLocal } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthServiceLocal, private router: Router ) {}
  canActivate(): boolean {
      if (this.auth.loggedIn()) {
        return true;
      } else {
        this.router.navigate[('/login')];
        return false;
      }

  }
}
