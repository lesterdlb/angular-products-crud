import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../models/category.model';
import {CategoriesService} from '../../services/categories.service';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product.model';
import {FormBuilderService} from '../../services/form-builder.service';
import {ErrorService} from '../../shared/services/error.service';
import {tap} from 'rxjs';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    public productForm: FormGroup = new FormGroup({});
    private categoriesList: Category[] = [];

    constructor(
        private formBuilderService: FormBuilderService,
        private categoriesService: CategoriesService,
        private productsService: ProductsService,
        private route: ActivatedRoute,
        private router: Router,
        private errorService: ErrorService) {
    }

    get id() {
        return this.productForm.get('id') as FormControl;
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
            error: error => console.log(error)
        });

        this.route.paramMap.subscribe({
            next: params => {
                const id = params.get('id');
                if (id) this.loadProduct(id);

            },
            error: (error: string) => this.errorService.setErrorMessage(error)
        });
    }

    public editProduct(): void {
        if (this.productForm.valid) {
            const id = this.productForm.value.id;
            this.productsService
                .update(id, this.productForm.value as Product)
                .pipe(
                    tap({
                        next: _ => this.router.navigate(['/products']),
                        error: (error: string) => this.errorService.setErrorMessage(error)
                    }))
                .subscribe();
        }
    }

    private loadProduct(id: string): void {
        this.productsService.get(id)
            .subscribe({
                next: product => {
                    this.productForm = this.formBuilderService.createProductForm(product);
                },
                error: (error: string) => this.errorService.setErrorMessage(error)
            });
    }
}
