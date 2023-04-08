import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BaseService<T> {
    protected apiUrl: string = '';

    constructor(protected http: HttpClient) {
    }

    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.apiUrl).pipe(
            catchError(this.handleError)
        );
    }

    get(id: string): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    create(entity: T): Observable<T> {
        return this.http.post<T>(this.apiUrl, entity).pipe(
            catchError(this.handleError)
        );
    }

    update(id: string, entity: T): Observable<T> {
        return this.http.put<T>(`${this.apiUrl}/${id}`, entity).pipe(
            catchError(this.handleError)
        );
    }

    delete(id: string): Observable<T> {
        return this.http.delete<T>(`${this.apiUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    protected handleError(error: HttpErrorResponse) {
        return throwError(() => {
            switch (error.status) {
                case 400:
                    const errorResponse = error.error;
                    return `${errorResponse.title}: ${errorResponse.errors.Id[0]}`;
                case 500:
                    return 'Internal server error';
                default:
                    return 'Unknown error; please try again later.';
            }
        });
    }
}
