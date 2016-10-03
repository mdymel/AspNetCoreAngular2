import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ProductModel} from "./product.model";

@Injectable()
export class ProductsService {

    products: ProductModel[] = [
        new ProductModel(0, "Product 0"),
        new ProductModel(1, "Product 1"),
        new ProductModel(2, "Product 2"),
        new ProductModel(3, "Product 3"),
        new ProductModel(4, "Product 4"),
    ];

    getProducts(): Observable<ProductModel[]> {
        return Observable.of(this.products);
    }

    getProduct(id: number): Observable<ProductModel> {
        return Observable.of(this.products[id]);
    }
}
