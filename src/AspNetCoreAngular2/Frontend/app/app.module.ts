import {NgModule}       from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}   from "./app.component";
import {HomeComponent} from "./home/home.component";
import {routing} from "./app.routes";
import {HttpModule} from "@angular/http";
import {HelloService} from "./home/hello.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports:      [
        BrowserModule,
        HttpModule,
        routing
    ],
    providers: [
        HelloService
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}