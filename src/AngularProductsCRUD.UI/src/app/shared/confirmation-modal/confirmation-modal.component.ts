import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
    @Input() title: string = '';
    @Input() message: string = '';
    @Output() confirmed = new EventEmitter();

    public show: boolean = false;

    constructor(public elementRef: ElementRef) {
    }

    ngOnInit(): void {
        document.body.appendChild(this.elementRef.nativeElement);

        this.elementRef.nativeElement.addEventListener('click', (el: any) => {
            if (el.target.className.includes('modal')) {
                this.close();
            }
        });
    }

    open() {
        this.show = true;
    }

    close() {
        this.show = false;
    }

    onConfirm() {
        this.confirmed.emit();
        this.close();
    }
}
