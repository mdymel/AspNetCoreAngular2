import {Component} from "@angular/core";

@Component({
    template: `
        <h1>About us</h1>
        <p>Here you can learn everything about us.</p>
        <p>Date: {{today | date: short}}</p>`
})
export class AboutComponent {
    today: Date;

    ngOnInit() {
        this.today = new Date();
    }
}
