import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component'
import {ProductHttpService} from './products/product-http.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'; // Load all features
import {ROUTER_PROVIDERS,ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';

@Component({
    selector: 'pm-app',
    template: `
    <ul class='nav navbar-nav'>
        <li><a [routerLink]="['Welcome']">Home</a></li>
        <li><a [routerLink]="['Products']">Product List</a></li>
    </ul>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductHttpService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/products', name: 'Products', component: ProductListComponent}
])
export class AppComponent {
    pageTitle: string = 'Product Management';
}