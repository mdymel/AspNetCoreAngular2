import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: "home", component: HomeComponent}
]);