import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';

import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CategoryModule,
        ProductModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
