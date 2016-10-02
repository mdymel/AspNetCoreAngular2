import {Component} from "@angular/core";

@Component({
    selector: "my-nav",
    template: `
        <a routerLink="/home">Home</a> |
        <a routerLink="/about">About</a> |
        <a routerLink="/product">Product</a>
        <hr>`
})
export class NavComponent {

}
