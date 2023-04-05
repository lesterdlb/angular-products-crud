import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
    {path: 'categories', redirectTo: 'categories/index', pathMatch: 'full'},
    {path: 'categories/index', component: IndexComponent},
    {path: 'categories/create', component: CreateComponent},
    {path: 'categories/edit/:id', component: EditComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule {
}
