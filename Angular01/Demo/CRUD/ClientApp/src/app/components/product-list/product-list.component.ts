import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  currentProduct = null;
  currentIndex = -1;
  name = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void {
    this.productService.readAll()
      .subscribe(
        products => {
          this.products = products;
          console.log(products);
        },
        error => {
          console.error(error);
        });
  }

  refresh(): void {
    this.readProducts();
    this.currentIndex = -1;
    this.currentProduct = null;
  }

  setCurrentProduct(product, index): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  deleteAllProducts(): void {
    this.productService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readProducts();
        },
        error => {
          console.error(error);
        });
  }

  searchByName(): void {
    this.productService.searchByName(this.name)
      .subscribe(products => {
        this.products = products;
        console.log(products);
      },
        error => {
          console.error(error);
        });
  }
}