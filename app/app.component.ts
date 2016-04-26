import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component'
import {ProductHttpService} from './products/product-http.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'; // Load all features
import {ROUTER_PROVIDERS,RouteConfig} from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    directives: [ProductListComponent],
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