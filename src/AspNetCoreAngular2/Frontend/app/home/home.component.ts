import { Component } from "@angular/core";
import {HelloService} from "./hello.service";

@Component({
    // selector: "app-home",
    template: `
        <h1>Greeting test</h1>
        <span id="greeting">{{greeting}}</span>
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