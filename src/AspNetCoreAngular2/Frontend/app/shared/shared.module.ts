import {NgModule} from "@angular/core";
import {NavComponent} from "./nav.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [NavComponent],
    imports: [CommonModule, RouterModule],
    exports: [CommonModule, NavComponent]
})
export class SharedModule {}
