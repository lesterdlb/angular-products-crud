import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    @Input() color: string = 'primary' || 'secondary' || 'success' || 'danger' || 'warning' || 'info';

    get alertColor(): string {
        return `alert-${this.color}`;
    }
}
