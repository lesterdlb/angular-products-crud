import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    private errorMessageSource = new BehaviorSubject<string>('');
    errorMessage$ = this.errorMessageSource.asObservable();

    setErrorMessage(message: string) {
        this.errorMessageSource.next(message);
    }

    clearErrorMessage() {
        this.errorMessageSource.next('');
    }
}
