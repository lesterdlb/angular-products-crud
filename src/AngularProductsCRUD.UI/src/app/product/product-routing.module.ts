import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
    {path: '', redirectTo: 'products/index', pathMatch: 'full'},
    {path: 'products', redirectTo: 'products/index', pathMatch: 'full'},
    {path: 'products/index', component: IndexComponent},
    {path: 'products/create', component: CreateComponent},
    {path: 'products/edit/:id', component: EditComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {
}
