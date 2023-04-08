import {Component} from '@angular/core';

interface NavItem {
    label: string;
    route: string;
}

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    public navItems: NavItem[] = [
        {label: 'Products', route: '/products'},
        {label: 'Categories', route: '/categories'}
    ];
}
