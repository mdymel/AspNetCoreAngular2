import {Http, ConnectionBackend, BaseRequestOptions, ResponseOptions, Response} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {HelloService} from "./hello.service";
import {TestBed, tick, fakeAsync, inject} from "@angular/core/testing";

describe("Hello Service", () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Http,
                    useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }, deps: [MockBackend, BaseRequestOptions]
                },
                HelloService,
                MockBackend,
                BaseRequestOptions
            ]
        });
    });

    it("call the greet url",
        inject([HelloService, MockBackend], fakeAsync((helloService: HelloService, mockBackend: MockBackend) => {

            let name: string = "Michal";
            let response: string;
            mockBackend.connections.subscribe(c => {
                expect(c.request.url).toBe("/api/hello?name=" + name);
                c.mockRespond(new Response(new ResponseOptions({body: "Hello " + name})));
            });
            helloService.greet(name).subscribe(data => {
                response = data;
            });
            tick();
            expect(response).toBe("Hello " + name);
        }))
    );
});
