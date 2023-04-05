import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../models/category.model';
import {Product} from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class FormBuilderService {
    createCategoryForm(initialValue: Category = {id: '', name: ''}): FormGroup {
        return new FormGroup({
            id: new FormControl(initialValue.id),
            name: new FormControl(
                initialValue.name,
                [Validators.required, Validators.minLength(3)]
            )
        });
    }

    createProductForm(initialValue: Product = {id: '', title: '', categoryId: '', category: '', price: 1}): FormGroup {
        return new FormGroup({
            id: new FormControl(initialValue.id),
            title: new FormControl(
                initialValue.title,
                [Validators.required, Validators.minLength(3)]
            ),
            categoryId: new FormControl(initialValue.categoryId),
            category: new FormControl(initialValue.category),
            price: new FormControl(
                initialValue.price, [Validators.required, Validators.min(1)]
            )
        });
    }
}

