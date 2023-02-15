import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category, CategoryRequest} from '../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    private readonly apiUrl = 'https://localhost:7036/api/categories';

    constructor(private http: HttpClient) {
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.apiUrl);
    }

    getCategory(id: string): Observable<Category> {
        return this.http.get<Category>(`${this.apiUrl}/${id}`);
    }

    addCategory(category: CategoryRequest): Observable<Category> {
        return this.http.post<Category>(this.apiUrl, category);
    }

    editCategory(category: Category): Observable<Category> {
        return this.http.put<Category>(`${this.apiUrl}/${category.id}`, category);
    }

    deleteCategory(id: string): Observable<Category> {
        return this.http.delete<Category>(`${this.apiUrl}/${id}`);
    }
}
