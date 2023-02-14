import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../services/categories.service';
import {Router} from '@angular/router';
import {CategoryRequest} from '../../../models/category.model';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
    categoryForm: FormGroup;

    constructor(
        private categoriesService: CategoriesService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.categoryForm = this.formBuilder.group({
            name: ['', Validators.required],
        });
    }

    addCategory(): void {
        if (this.categoryForm.valid) {
            this.categoriesService
                .addCategory(this.categoryForm.value as CategoryRequest)
                .subscribe({
                    next: _ => this.router.navigate(['/categories']),
                    error: err => console.log(err)
                });
        }
    }
}
