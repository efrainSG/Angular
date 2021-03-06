import { HttpClient, HttpContext, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators'
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'assets/products.json';
    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        console.error(err.message);
        return throwError(err.message);
    }
}