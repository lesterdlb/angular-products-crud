import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../../models/category.model';
import {CategoriesService} from '../../services/categories.service';
import {ErrorService} from '../../shared/services/error.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {
    public errorMessage: string = '';
    private categoriesList: Category[] = [];

    constructor(
        private categoriesService: CategoriesService,
        private errorService: ErrorService) {
    }

    get categories(): Category[] {
        return this.categoriesList;
    }

    ngOnInit(): void {
        this.errorService.errorMessage$.subscribe({
            next: (message: string) => this.errorMessage = message
        });

        this.categoriesService.getAll().subscribe({
            next: (categories: Category[]) => this.categoriesList = categories,
            error: (error: string) => this.errorService.setErrorMessage(error)
        });
    }

    ngOnDestroy(): void {
        this.errorService.clearErrorMessage();
    }
}
