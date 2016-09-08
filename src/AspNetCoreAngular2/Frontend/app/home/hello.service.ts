import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable, } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class HelloService {

    constructor(private http: Http) {

    }

    greet(name: string): Observable<string> {
        return this.http
            .get(`/api/hello?name=${name}`)
            .map(res => <string> res.text());
    }
}