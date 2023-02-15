import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../models/category.model';
import {ProductsService} from '../../../services/products.service';
import {CategoriesService} from '../../../services/categories.service';
import {Router} from '@angular/router';
import {ProductRequest} from '../../../models/product.model';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
    productsForm: FormGroup;
    categories: Category[] = [];
    apiError: string = '';

    constructor(
        private productsService: ProductsService,
        private categoriesService: CategoriesService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.productsForm = this.formBuilder.group({
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
    }

    addProduct(): void {
        if (this.productsForm.valid) {
            this.productsService
                .addProduct(this.productsForm.value as ProductRequest)
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
}
