import {Component} from "@angular/core";
import {ProductModel} from "./product.model";
import {ProductsService} from "./products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    template: `
        <h2>Product Details</h2>
        <b>Id: </b>{{product.id}}<br>
        <b>Name: </b>{{product.name}}
    `
})
export class ProductDetailsComponent {

    constructor(
        private route: ActivatedRoute,
        private productsService: ProductsService) {

    }

    product: ProductModel;

    ngOnInit() {
        let id = parseInt(this.route.snapshot.params["id"], 10);
        this.productsService
            .getProduct(id)
            .subscribe(data => this.product = data);
    }

}