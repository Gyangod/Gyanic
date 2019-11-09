import { UserData } from "./user-data";
import { LoginService } from './login.service';
import { LoginPage } from './../pages/login/login';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {

  constructor(
    private userData: UserData,
    private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userData.isLoggedIn()) {
        this.router.navigateByUrl('/login');
    }
    return this.userData.isLoggedIn();
  }
}
