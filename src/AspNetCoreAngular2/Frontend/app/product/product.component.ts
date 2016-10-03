import {Component} from "@angular/core";

@Component({
    template: `
        <my-nav></my-nav>
        <h1>Products</h1>
        <router-outlet></router-outlet>
    `
})
export class ProductComponent {}