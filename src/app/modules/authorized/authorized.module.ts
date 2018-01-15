import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizedComponent} from './authorized.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AuthorizedComponent,
        children: [{
            path: 'home',
            loadChildren: 'app/modules/authorized/home/home.module#HomeModule'
        }]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        )
    ],
    declarations: [AuthorizedComponent, SidebarComponent],
    exports: [RouterModule],
})

export class AuthorizedModule {}
