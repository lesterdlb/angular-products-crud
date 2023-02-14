import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoriesListComponent} from './components/categories/categories-list/categories-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CategoriesListComponent,
        AddCategoryComponent,
        ProductsListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
