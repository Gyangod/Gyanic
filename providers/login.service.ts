import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isLoggedIn = false;
  constructor() { }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  logIn() {
    this._isLoggedIn = true;
  }

  logOut() {
    this._isLoggedIn = false;
  }
}
