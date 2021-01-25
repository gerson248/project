import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
    //this.products = this.productsService.getAllProducts()
  }

  // tslint:disable-next-line: typedef
  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }

  // tarer esos productos
  // tslint:disable-next-line: typedef
  fetchProducts() {
    this.products = this.productsService.getAllProducts()
    /*.subscribe(products => {
      this.products = products;
      // console.log(products);
    });*/
  }

}
