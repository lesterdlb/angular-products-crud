import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {ErrorService} from '../../shared/services/error.service';
import {ConfirmationModalComponent} from '../../shared/confirmation-modal/confirmation-modal.component';
import {tap} from 'rxjs';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {
    public errorMessage: string = '';
    private productsList: Product[] = [];

    constructor(
        private productsService: ProductsService,
        private errorService: ErrorService) {
    }

    get products(): Product[] {
        return this.productsList;
    }

    ngOnInit(): void {
        this.errorService.errorMessage$.subscribe({
            next: (message: string) => this.errorMessage = message
        });

        this.productsService.getAll().subscribe({
            next: products => this.productsList = products,
            error: (error: string) => this.errorService.setErrorMessage(error)
        });
    }

    ngOnDestroy(): void {
        this.errorService.clearErrorMessage();
    }

    deleteProduct(productId: string, confirmationModal: ConfirmationModalComponent): void {
        confirmationModal.open();
        confirmationModal.confirmed.subscribe(() => {
            this.productsService
                .delete(productId)
                .pipe(
                    tap({
                        next: _ => this.productsList = this.productsList.filter(c => c.id !== productId),
                        error: (error: string) => this.errorService.setErrorMessage(error)
                    }))
                .subscribe();
        });
    }
}
