import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoriesListComponent} from './components/categories/categories-list/categories-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';

@NgModule({
    declarations: [
        AppComponent,
        CategoriesListComponent,
        AddCategoryComponent,
        ProductsListComponent,
        EditCategoryComponent,
        AddProductComponent,
        EditProductComponent
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
