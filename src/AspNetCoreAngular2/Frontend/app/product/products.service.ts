import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ProductModel} from "./product.model";

@Injectable()
export class ProductsService {

    getProducts(): Observable<ProductModel[]> {
        let products = [
            new ProductModel(1, "Product 1"),
            new ProductModel(2, "Product 2"),
            new ProductModel(3, "Product 3"),
            new ProductModel(4, "Product 4"),
            new ProductModel(5, "Product 5"),
        ];
        return Observable.of(products);
    }
}
