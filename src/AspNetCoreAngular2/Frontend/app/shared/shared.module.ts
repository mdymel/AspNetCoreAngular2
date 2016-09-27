import {NgModule} from "@angular/core";
import {NavComponent} from "./nav.component";
import {CommonModule} from "@angular/common";
import {routing} from "../app.routes";

@NgModule({
    declarations: [
        NavComponent
    ],
    imports: [
        CommonModule, routing
    ],
    exports: [
        CommonModule,
        NavComponent
    ]
})
export class SharedModule {}
