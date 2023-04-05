import {Component, OnInit} from '@angular/core';
import {Category} from '../../models/category.model';
import {CategoriesService} from '../../services/categories.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    private categoriesList: Category[] = [];

    constructor(private categoriesService: CategoriesService) {
    }

    get categories(): Category[] {
        return this.categoriesList;
    }

    ngOnInit(): void {
        this.categoriesService.getAll().subscribe({
            next: (categories: Category[]) => {
                this.categoriesList = categories;
            },
            error: error => console.log(error)
        });
    }
}
