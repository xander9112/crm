import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

import {AppComponent} from './app.component';

import {AuthService} from './services/auth.service';

import {AuthModule} from './modules/auth/auth.module';
import {AuthorizedModule} from './modules/authorized/authorized.module';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AuthModule,
        AuthorizedModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, PageNotFoundComponent],
    providers: [CookieService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
