import { Component, OnInit } from '@angular/core';
import { flatMap } from 'tslint/lib/utils';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product = {
    name: '',
    description: '',
    available: false
  };
  submited = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  createProduct(): void {
    const data = {
      name: this.product.name,
      describe: this.product.description
    };

    this.productService.create(data)
    .subscribe( response => {
      console.log(response);
      this.submited = true;
    },
    error => {
      console.error(error);
    });
  }

  newProduct(): void {
    this.submited = false;
    this.product = {
      name: '',
      description: '',
      available: false
    }
  }
}
