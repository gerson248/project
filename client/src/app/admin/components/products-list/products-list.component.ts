import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.fetchProducts();
  }

  // tslint:disable-next-line: typedef
  fetchProducts() {
    this.productsService.getAllProducts()

  }

  // tslint:disable-next-line: typedef
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
  }
}
