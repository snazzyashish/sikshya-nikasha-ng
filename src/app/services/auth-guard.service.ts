import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
  
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
          var userInfo = localStorage.getItem('userInfo');
          if(userInfo){
            userInfo = JSON.parse(userInfo);
          }
        var isLoggedIn = userInfo ? true : false ;
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        }
        return isLoggedIn;
    }

    canLoad() {
        return false;
      }

}