import {NgModule}       from "@angular/core";
import {AboutComponent} from "./about.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AboutComponent
    ]
})
export class AboutModule {}
