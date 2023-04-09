import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../models/category.model';
import {FormControl, FormGroup} from '@angular/forms';
import {FormBuilderService} from '../../services/form-builder.service';
import {ErrorService} from '../../shared/services/error.service';
import {tap} from 'rxjs';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    categoryForm: FormGroup = new FormGroup({});

    constructor(
        private formBuilderService: FormBuilderService,
        private categoriesService: CategoriesService,
        private router: Router,
        private route: ActivatedRoute,
        private errorService: ErrorService) {
    }

    get id() {
        return this.categoryForm.get('id') as FormControl;
    }

    get name() {
        return this.categoryForm.get('name') as FormControl;
    }

    ngOnInit(): void {
        this.categoryForm = this.formBuilderService.createCategoryForm();
        this.route.paramMap.subscribe({
            next: params => {
                const id = params.get('id');
                if (id) this.loadCategory(id);

            },
            error: (error: string) => this.errorService.setErrorMessage(error)
        });
    }

    public editCategory(): void {
        if (this.categoryForm.valid) {
            const id = this.categoryForm.value.id;
            this.categoriesService
                .update(id, this.categoryForm.value as Category)
                .pipe(
                    tap({
                        next: _ => this.router.navigate(['/categories']),
                        error: (error: string) => this.errorService.setErrorMessage(error)
                    }))
                .subscribe();
        }
    }

    private loadCategory(id: string): void {
        this.categoriesService.get(id)
            .subscribe({
                next: category => {
                    this.categoryForm = this.formBuilderService.createCategoryForm(category);
                },
                error: (error: string) => this.errorService.setErrorMessage(error)
            });
    }
}
