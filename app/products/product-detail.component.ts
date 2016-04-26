import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    constructor(private _routeParams: RouteParams) {
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }
}