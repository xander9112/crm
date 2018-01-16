import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizedComponent} from './authorized.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

import {AuthGuard} from '../../guards/auth.guard';

import {AngularFontAwesomeModule} from 'angular-font-awesome';

const appRoutes: Routes = [
    {
        path: '',
        component: AuthorizedComponent,
        // canActivate: [AuthGuard],
        children: [{
            path: 'home',
            loadChildren: 'app/modules/authorized/home/home.module#HomeModule'
        }]
    }
];

@NgModule({
    imports: [
        AngularFontAwesomeModule,
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        )
    ],
    declarations: [AuthorizedComponent, SidebarComponent],
    providers: [AuthGuard],
    exports: [RouterModule],
})

export class AuthorizedModule {
}
