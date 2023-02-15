import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../models/category.model';
import {CategoriesService} from '../../../services/categories.service';
import {ProductsService} from '../../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../models/product.model';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
    productsForm: FormGroup;
    categories: Category[] = [];
    apiError: string = '';

    constructor(
        private categoriesService: CategoriesService,
        private productsService: ProductsService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.productsForm = this.formBuilder.group({
            id: [''],
            title: ['', Validators.required],
            categoryId: ['', Validators.required],
            price: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.categoriesService.getCategories().subscribe({
            next: categories => this.categories = categories,
            error: error => console.log(error)
        });

        this.route.paramMap.subscribe({
            next: params => {
                const id = params.get('id');
                if (id) {
                    this.productsService.getProduct(id).subscribe({
                        next: product => {
                            this.productsForm.patchValue({
                                id: product.id,
                                title: product.title,
                                categoryId: product.categoryId,
                                price: product.price
                            });
                        },
                        error: error => console.log(error)
                    });
                }
            },
            error: error => console.log(error)
        });
    }

    editProduct(): void {
        if (this.productsForm.valid) {
            this.productsService
                .editProduct(this.productsForm.value as Product)
                .subscribe({
                    next: (_) => {
                        return this.router.navigate(['/products']);
                    },
                    error: (error: HttpErrorResponse) => {
                        Object.entries(error.error.errors).forEach(([_, value]) => {
                            this.apiError = value as string;
                        });
                    }
                });
        }
    }

    deleteProduct(): void {
        if (confirm("Are you sure you want to delete this product?")) {
            this.productsService
                .deleteProduct(this.productsForm.value.id)
                .subscribe({
                    next: (_) => this.router.navigate(['/products']),
                    error: (error: HttpErrorResponse) => {
                        Object.entries(error.error.errors).forEach(([_, value]) => {
                            this.apiError = value as string;
                        });
                    }
                });
        }
    }
}
