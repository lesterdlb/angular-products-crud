import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../models/category.model';
import {CategoriesService} from '../../services/categories.service';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product.model';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilderService} from '../../services/form-builder.service';

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
        private router: Router) {
    }

    get id() {
        return this.productForm.get('id') as FormControl;
    }

    get title() {
        return this.productForm.get('title') as FormControl;
    }

    get categoryId() {
        return this.productForm.get('categoryId') as FormControl;
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
                if (id) {
                    this.productsService.get(id).subscribe({
                        next: product => this.productForm.setValue({...product}),
                        error: error => console.log(error)
                    });
                }
            },
            error: error => console.log(error)
        });
    }

    editProduct(): void {
        if (this.productForm.valid) {
            this.productsService
                .update(this.productForm.value.id, this.productForm.value as Product)
                .subscribe({
                    next: (_) => this.router.navigate(['/products']),
                    error: (error: HttpErrorResponse) => {
                        Object.entries(error.error.errors).forEach(([_, value]) => {
                            // this.apiError = value as string;
                        });
                    }
                });
        }
    }

    deleteProduct(): void {
        if (confirm('Are you sure you want to delete this product?')) {
            this.productsService
                .delete(this.productForm.value.id)
                .subscribe({
                    next: (_) => this.router.navigate(['/products']),
                    error: (error: HttpErrorResponse) => {
                        Object.entries(error.error.errors).forEach(([_, value]) => {
                            // this.apiError = value as string;
                        });
                    }
                });
        }
    }
}
