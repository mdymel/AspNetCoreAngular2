import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {ProductsService} from "./products.service";
import {ProductsListComponent} from "./products-list.component";
import {ProductDetailsComponent} from "./product-details.component";
import {routing} from "./product.routing";
import {ProductComponent} from "./product.component";

@NgModule({
    declarations: [ProductComponent, ProductsListComponent, ProductDetailsComponent],
    imports: [SharedModule, routing],
    providers: [ProductsService],
})
export class ProductModule {}

