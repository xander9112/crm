import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {toPromise} from 'rxjs/operator/toPromise';

import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const url: string = state.url;

        return this.checkAuth(url);
    }

    checkAuth(url: string): boolean | Promise<boolean> {
        if (!this.authService.user) {
            return this.authService.getState()
                .then(response => {
                    if (!response) {
                        this.authService.redirectUrl = url;

                        this.router.navigate(['/login']);

                        return false;
                    }

                    return response;
                });
        }
    }
}
