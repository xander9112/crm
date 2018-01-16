import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {User} from '../models/user';
import {SystemState} from '../interfaces/system-state';

@Injectable()
export class AuthService {
    private cookieDomain: string = environment.domain;
    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    private token;
    private host: Array<string> = location.host.split('.');

    redirectUrl: string;
    user: Object;

    constructor(private http: HttpClient,
                private cookieService: CookieService,
                private router: Router) {

        this.token = this.cookieService.get('token');

        if (this.token) {

        }
    }

    login(user: User): Promise<any> {
        const url = `${environment.apiUrl}/auth/login`;

        const domain = environment.production ? this.host.length > 2 ? this.host[0] : '' : 'development';
        const data = {...user, domain};

        return this.http.post(url, data, {headers: this.headers})
            .toPromise()
            .then(response => {
                console.log(response);
            });
    }

    getState(): Promise<boolean> {
        const url = `${environment.apiUrl}/system/state`;

        return this.http.get(url, {
            headers: this.headers,
            params: {
                domain: 'develop',
                access_token: this.token
            }
        })
            .toPromise()
            .then((response: SystemState) => {
                if (!response.content.authorized) {
                    this.cookieService.delete('token');

                    return false;
                }

                this.user = response.content.user;

                return response.content.authorized && response.content.allowed;
            });
    }

}
