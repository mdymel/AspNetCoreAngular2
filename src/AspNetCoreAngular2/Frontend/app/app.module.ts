import {NgModule}       from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}   from "./app.component";
import {routing} from "./app.routes";
import {HttpModule} from "@angular/http";
import {HomeModule} from "./home/home.module";
import {AboutModule} from "./about/about.module";

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        routing,

        HomeModule,
        AboutModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}