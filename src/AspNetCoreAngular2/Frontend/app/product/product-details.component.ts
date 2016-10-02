import {Component, Input} from "@angular/core";
import {ProductModel} from "./product.model";

@Component({
    selector: "product-details",
    template: `
        <b>Id: </b>{{product.id}}<br>
        <b>Name: </b>{{product.name}}
    `
})
export class ProductDetailsComponent {
    @Input() product: ProductModel;
}