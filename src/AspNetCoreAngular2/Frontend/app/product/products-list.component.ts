import {Component} from "@angular/core";
import {ProductModel} from "./product.model";
import {ProductsService} from "./products.service";

@Component({
    template: `
        <h2>Products list</h2>
        <ul>
            <li *ngFor="let product of products" ><a [routerLink]="product.id">{{product.name}}</a></li>
        </ul>
    `
})
export class ProductsListComponent {

    constructor(private productsService: ProductsService) {

    }

    products: ProductModel[];

    ngOnInit() {
        this.productsService
            .getProducts()
            .subscribe(data => {
                this.products = data;
            });
    }
}