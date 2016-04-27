import {Component,OnInit} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {ProductHttpService} from './product-http.service';
import {IProduct} from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    constructor(private _routeParams: RouteParams,private _router: Router,private _productService: ProductHttpService) {
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }
    
    onBack(): void {
        this._router.navigate(['Products']);
    }
    
    ngOnInit():void {
        let all;
        
         this._productService.getProducts()
        .subscribe(
            products => this.product = products,
            error => this.errorMessage = <any>error
        );
    }
}