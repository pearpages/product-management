import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component'
import {ProductHttpService} from './products/product-http.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'; // Load all features

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    directives: [ProductListComponent],
    providers: [ProductHttpService,HTTP_PROVIDERS]
})
export class AppComponent {
    pageTitle: string = 'Product Management';
}