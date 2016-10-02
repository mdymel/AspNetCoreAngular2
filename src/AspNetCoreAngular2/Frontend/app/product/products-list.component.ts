import {Component, EventEmitter} from "@angular/core";
import {ProductModel} from "./product.model";
import {ProductsService} from "./products.service";
import {Output} from "@angular/core";

@Component({
    selector: "products-list",
    template: `
        <ul>
            <li *ngFor="let product of products" (click)="change.next(product)" style="cursor: pointer; text-decoration: underline;">{{product.name}}</li>
        </ul>
    `
})
export class ProductsListComponent {

    constructor(private productsService: ProductsService) {

    }

    @Output() change: EventEmitter = new EventEmitter();
    products: ProductModel[];

    ngOnInit() {
        this.productsService
            .getProducts()
            .subscribe(data => {
                this.products = data;
            });
    }
}