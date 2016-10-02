import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HelloService} from "./hello.service";
import {SharedModule} from "../shared/shared.module";
import {routing} from "./home.routing";

@NgModule({
    declarations: [HomeComponent],
    imports: [SharedModule, routing],
    providers: [HelloService],
    exports: [HomeComponent]
})
export class HomeModule {}
