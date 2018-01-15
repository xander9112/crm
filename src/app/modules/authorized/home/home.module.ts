import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {SalesComponent} from './sales/sales.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: DashBoardComponent,
            },
            {
                path: 'sales',
                component: SalesComponent,
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes)
    ],
    declarations: [DashBoardComponent, HomeComponent, SalesComponent],
    exports: [RouterModule]
})
export class HomeModule {
}
