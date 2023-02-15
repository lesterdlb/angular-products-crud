import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../models/category.model';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
    styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
    categoryForm: FormGroup;
    apiError: string = '';

    constructor(
        private categoriesService: CategoriesService,
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ) {
        this.categoryForm = this.formBuilder.group({
            id: '',
            name: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe({
            next: params => {
                const id = params.get('id');
                if (id) {
                    this.categoriesService.getCategory(id)
                        .subscribe({
                            next: category => {
                                this.categoryForm.patchValue({
                                    id: category.id,
                                    name: category.name,
                                });
                            },
                            error: error => console.log(error)
                        });
                }
            },
            error: error => console.log(error)
        });
    }

    editCategory(): void {
        if (this.categoryForm.valid) {
            this.categoriesService
                .editCategory(this.categoryForm.value as Category)
                .subscribe({
                    next: (_) => this.router.navigate(['/categories']),
                    error: error => console.log(error)
                });
        }
    }

    deleteCategory(): void {
        if (confirm("Are you sure you want to delete this category?")) {
            this.categoriesService
                .deleteCategory(this.categoryForm.value.id)
                .subscribe({
                    next: (_) => this.router.navigate(['/categories']),
                    error: (error: HttpErrorResponse) => {
                        Object.entries(error.error.errors).forEach(([_, value]) => {
                            this.apiError = value as string;
                        });
                    }
                });
        }
    }
}
