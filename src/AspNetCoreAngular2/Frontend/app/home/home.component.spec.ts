import {Observable} from "rxjs/Rx";
import {TestBed, async} from "@angular/core/testing";
import {HomeComponent} from "./home.component";
import {HelloService} from "./hello.service";

describe("Home Component", () => {
    let greet = "Hello Asd123";
    let helloService;

    beforeEach(() => {
        helloService = {
            greet: jasmine.createSpy("greet").and.returnValue(Observable.of(greet))
        };

        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ],
            providers: [
                {provide: HelloService, useValue: helloService}
            ]
        });
    });

    it("can initialize", async(() => {
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(HomeComponent);
            let element = fixture.nativeElement;
            let component = fixture.componentInstance;

            fixture.detectChanges();

            expect(element).not.toBeNull();
            expect(component).not.toBeNull();

            expect(helloService.greet).toHaveBeenCalled();

            let header = element.querySelector("h1");
            expect(header).not.toBeNull();
            expect(header.textContent).toBe("Greeting test");

            let greeting = element.querySelector("#greeting");
            expect(greeting).not.toBeNull();
            expect(greeting.textContent).toBe(greet);
        });
    }));
});
