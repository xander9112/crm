import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ButtonComponent} from '../../components/form/button/button.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent}
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        )
    ],
    declarations: [LoginComponent, RegistrationComponent, ButtonComponent],
    exports: [RouterModule]
})
export class AuthModule {
}
