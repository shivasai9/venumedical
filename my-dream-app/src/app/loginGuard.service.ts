import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
} from '@angular/router';
import { LoginHelper } from './loginHelper.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(private Service: LoginHelper, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.Service.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                        alert("please login to get the details...");
                    }
                }
            );
    }
}