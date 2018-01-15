import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {AuthModule} from './modules/auth/auth.module';
import {AuthorizedModule} from './modules/authorized/authorized.module';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AuthModule,
        AuthorizedModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, PageNotFoundComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
