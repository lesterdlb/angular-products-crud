import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesListComponent} from './components/categories/categories-list/categories-list.component';
import {AddCategoryComponent} from './components/categories/add-category/add-category.component';
import {ProductsListComponent} from './components/products/products-list/products-list.component';
import {EditCategoryComponent} from './components/categories/edit-category/edit-category.component';
import {AddProductComponent} from './components/products/add-product/add-product.component';
import {EditProductComponent} from './components/products/edit-product/edit-product.component';

const routes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'categories', component: CategoriesListComponent},
    {path: 'categories/add', component: AddCategoryComponent},
    {path: 'categories/edit/:id', component: EditCategoryComponent},
    {path: 'products', component: ProductsListComponent},
    {path: 'products/add', component: AddProductComponent},
    {path: 'products/edit/:id', component: EditProductComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
