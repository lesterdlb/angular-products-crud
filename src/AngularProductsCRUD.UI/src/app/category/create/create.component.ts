import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoriesService} from '../../services/categories.service';
import {Router} from '@angular/router';
import {Category} from '../../models/category.model';
import {FormBuilderService} from '../../services/form-builder.service';
import {ErrorService} from '../../shared/services/error.service';
import {tap} from 'rxjs';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    categoryForm: FormGroup = new FormGroup({});

    constructor(
        private formBuilderService: FormBuilderService,
        private categoriesService: CategoriesService,
        private router: Router,
        private errorService: ErrorService) {
    }

    get name() {
        return this.categoryForm.get('name') as FormControl;
    }

    ngOnInit() {
        this.categoryForm = this.formBuilderService.createCategoryForm();
    }

    addCategory(): void {
        if (this.categoryForm.valid) {
            this.categoriesService
                .create(this.categoryForm.value as Category)
                .pipe(
                    tap({
                        next: _ => this.router.navigate(['/categories']),
                        error: (error: string) => this.errorService.setErrorMessage(error)
                    })
                ).subscribe();
        }
    }
}
