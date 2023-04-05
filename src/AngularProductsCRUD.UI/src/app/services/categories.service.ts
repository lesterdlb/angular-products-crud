import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category.model';
import {environment} from '../../environments/environment';
import {BaseService} from './base.service';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService extends BaseService<Category> {
    protected override readonly apiUrl = `${environment.apiBaseUrl}categories`;

    constructor(protected override http: HttpClient) {
        super(http);
    }
}
