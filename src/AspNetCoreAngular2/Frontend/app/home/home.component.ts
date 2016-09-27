import { Component } from "@angular/core";
import {HelloService} from "./hello.service";

@Component({
    template: `
        <my-nav></my-nav>
        <h1>Greeting test</h1>
        <p id="greeting">{{greeting}}</p>
    `
})
export class HomeComponent {
    constructor(private helloService: HelloService) {
    }

    ngOnInit() {
        this.greet("Michal");
    }

    greeting: string;

    greet(name: string): void {
        this.helloService
            .greet(name)
            .subscribe(data => this.greeting = data);
    }
}