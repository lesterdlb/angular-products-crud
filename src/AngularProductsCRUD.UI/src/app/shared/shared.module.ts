import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from './alert/alert.component';
import {ErrorService} from './services/error.service';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';

@NgModule({
    declarations: [InputComponent, AlertComponent, ConfirmationModalComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [InputComponent, AlertComponent, ConfirmationModalComponent],
    providers: [ErrorService]
})
export class SharedModule {
}
