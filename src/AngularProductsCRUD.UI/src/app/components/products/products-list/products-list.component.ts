import {Component} from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductsService} from '../../../services/products.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
    products: Product[] = [];

    constructor(private productsService: ProductsService,) {
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe({
            next: products => this.products = products,
            error: error => console.log(error)
        });
    }
}
