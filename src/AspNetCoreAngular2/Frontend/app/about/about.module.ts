import {NgModule}       from "@angular/core";
import {AboutComponent} from "./about.component";
import {SharedModule} from "../shared/shared.module";
import {routing} from "./about.routing";

@NgModule({
    declarations: [AboutComponent],
    imports: [SharedModule, routing],
    exports: [AboutComponent]
})
export class AboutModule {}
