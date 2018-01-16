import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    user: User = new User();

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    loginUser(): void {
        this.authService.login(this.user)
            .then(response => {
            })
            .catch(error => {
                console.log(error);
            });
    }
}
