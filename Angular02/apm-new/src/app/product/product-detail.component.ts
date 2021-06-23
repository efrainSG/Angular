import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string='Product Detail';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router) { 

      this.product = {
        productCode : "ABC-123",
        description:"description",
        imageUrl: "",
        price: 10.20,
        productId: 30,
        productName: "algo",
        releaseDate: "21-06-2021",
        starRating: 4.5
      }
    }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.pageTitle += `: ${id} - ${this.product?.productName}`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
