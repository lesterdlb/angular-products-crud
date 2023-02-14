import {Component} from '@angular/core';
import {Category} from '../../../models/category.model';
import {CategoriesService} from '../../../services/categories.service';

@Component({
    selector: 'app-categories-list',
    templateUrl: './categories-list.component.html',
    styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {
    categories: Category[] = [];

    constructor(private categoriesService: CategoriesService) {
    }

    ngOnInit(): void {
        this.categoriesService.getCategories().subscribe({
            next: (categories: Category[]) => {
                this.categories = categories;
            },
            error: error => console.log(error)
        });
    }
}
