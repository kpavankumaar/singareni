import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators"


@Injectable()
export class DataService{
    constructor(private http:HttpClient){

    }

    getCustomers():Observable<any>{
        // return this.http.get("http://localhost:5000/api/customers").pipe(map( v => v));
        return this.http.get("api/customers").pipe(
            map( v => v),
            catchError(v => v)
            );
    }
}