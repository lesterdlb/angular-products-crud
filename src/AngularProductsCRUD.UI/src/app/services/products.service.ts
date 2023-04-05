import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService extends BaseService<Product> {
    protected override readonly apiUrl = `${environment.apiBaseUrl}products`;

    constructor(protected override http: HttpClient) {
        super(http);
    }
}
