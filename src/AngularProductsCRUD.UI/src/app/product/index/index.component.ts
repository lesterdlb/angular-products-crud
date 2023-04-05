import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    private products: Product[] = [];

    constructor(private productsService: ProductsService) {
    }

    get Products(): Product[] {
        return this.products;
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe({
            next: products => this.products = products,
            error: error => console.log(error)
        });
    }
}
