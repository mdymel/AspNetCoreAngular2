import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AboutComponent} from "./about.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: 'about', component: AboutComponent}
]);
