import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ProductComponent} from "./product.component";
import {ProductsListComponent} from "./products-list.component";
import {ProductDetailsComponent} from "./product-details.component";

const routes = [
    {
        path: "",
        component: ProductComponent,
        children: [
            {path: "", component: ProductsListComponent},
            {path: ":id", component: ProductDetailsComponent}
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
