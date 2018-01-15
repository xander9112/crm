import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        )
    ],
    declarations: [LoginComponent, RegistrationComponent],
    exports: [RouterModule]
})
export class AuthModule {
}
