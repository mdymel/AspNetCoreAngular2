import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HelloService} from "./hello.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        HelloService
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}
