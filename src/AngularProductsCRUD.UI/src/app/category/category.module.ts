import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {SharedModule} from '../shared/shared.module';

import {CategoryRoutingModule} from './category-routing.module';
import {IndexComponent} from './index/index.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';

@NgModule({
    declarations: [
        IndexComponent,
        CreateComponent,
        EditComponent
    ],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class CategoryModule {
}
