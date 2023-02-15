import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product, ProductRequest} from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private readonly apiUrl = 'https://localhost:7036/api/products';

    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }

    getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/${id}`);
    }

    addProduct(product: ProductRequest): Observable<Product> {
        return this.http.post<Product>(this.apiUrl, product);
    }

    editProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
    }

    deleteProduct(id: string): Observable<Product> {
        return this.http.delete<Product>(`${this.apiUrl}/${id}`);
    }
}
