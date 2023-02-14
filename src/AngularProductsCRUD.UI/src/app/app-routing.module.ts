import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesListComponent} from './components/categories/categories-list/categories-list.component';

const routes: Routes = [
    {path: '', component: CategoriesListComponent},
    {path: 'categories', component: CategoriesListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
