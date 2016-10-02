import {NgModule} from "@angular/core";
import {ProductComponent} from "./product.component";
import {SharedModule} from "../shared/shared.module";
import {ProductsService} from "./products.service";
import {ProductsListComponent} from "./products-list.component";
import {ProductDetailsComponent} from "./product-details.component";

@NgModule({
    declarations: [ProductComponent, ProductsListComponent, ProductDetailsComponent],
    imports: [SharedModule],
    providers: [ProductsService],
    exports: [ProductComponent]
})
export class ProductModule {}

