import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {LeftMenuComponent} from './layouts/left-menu/left-menu.component';
import {TopMenuComponent} from './layouts/top-menu/top-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProductsComponent,
        LeftMenuComponent,
        TopMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
