import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'The product list';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    private _listFilter:string = '';
    get listFilter(): string {
         return this._listFilter; 
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden cart",
            "productCode": "000-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden-cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "March 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        }
    ];

    ngOnInit(): void {
        this.listFilter = 'cart';
    }

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {

    }

    performFilter(filterby:string): IProduct[] {
        filterby = filterby.toLowerCase();
        return this.products.filter((product: IProduct) =>
         product.productName.toLowerCase().includes(filterby));
    }
}