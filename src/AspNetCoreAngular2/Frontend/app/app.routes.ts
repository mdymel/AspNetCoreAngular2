import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ProductComponent} from "./product/product.component";

const appRoutes: Routes  = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "product", component: ProductComponent }
];

export const routing = RouterModule.forRoot(appRoutes);