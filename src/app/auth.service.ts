import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceLocal {
  constructor() { }
  loggedIn() {
    return !!localStorage.getItem('isLoggedIn');
  }

 userData(user: any) {
    return user;
  }
}
