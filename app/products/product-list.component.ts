import {Component,OnInit} from 'angular2/core';
import {IProduct} from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductHttpService} from './product-http.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = null;
    products: IProduct[] = null;
    errorMessage: string = null;
    
    constructor(private _productService: ProductHttpService) {
        
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
         this._productService.getProducts()
        .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
        );
    }
    
    onRatingClicked(message: string):void {
        this.pageTitle = 'Product List: ' + message;
    }
}