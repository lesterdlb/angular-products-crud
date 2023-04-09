import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product.model';
import {Category} from '../../models/category.model';
import {CategoriesService} from '../../services/categories.service';
import {FormBuilderService} from '../../services/form-builder.service';
import {ErrorService} from '../../shared/services/error.service';
import {tap} from 'rxjs';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    productForm: FormGroup = new FormGroup({});
    private categoriesList: Category[] = [];

    constructor(
        private formBuilderService: FormBuilderService,
        private productsService: ProductsService,
        private categoriesService: CategoriesService,
        private router: Router,
        private errorService: ErrorService) {
    }

    get title() {
        return this.productForm.get('title') as FormControl;
    }

    get price() {
        return this.productForm.get('price') as FormControl;
    }

    get categories(): Category[] {
        return this.categoriesList;
    }

    ngOnInit(): void {
        this.productForm = this.formBuilderService.createProductForm();

        this.categoriesService.getAll().subscribe({
            next: categories => this.categoriesList = categories,
            error: (error: string) => this.errorService.setErrorMessage(error)
        });
    }

    addProduct(): void {
        if (this.productForm.valid) {
            this.productsService
                .create(this.productForm.value as Product)
                .pipe(
                    tap({
                        next: _ => this.router.navigate(['/products']),
                        error: (error: string) => this.errorService.setErrorMessage(error)
                    })
                ).subscribe();
        }
    }
}
