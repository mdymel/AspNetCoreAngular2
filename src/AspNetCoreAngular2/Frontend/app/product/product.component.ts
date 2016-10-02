import {Component} from "@angular/core";
import {ProductModel} from "./product.model";

@Component({
    template: `
        <my-nav></my-nav>
        <h1>Product details</h1>
        <div>
            <h2>List</h2>
            <products-list (change)="product = $event"></products-list>
        </div>
        <hr>
        <div>
            <h2>Product details</h2>
            <product-details [product]="product" *ngIf="product != undefined"></product-details>
        </div>
    `
})
export class ProductComponent {
    product: ProductModel;
}