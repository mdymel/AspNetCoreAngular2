import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HelloService} from "./hello.service";

@NgModule({
    declarations: [
        HomeComponent
    ],
    providers: [
        HelloService
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}
