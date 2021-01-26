import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  // ngOnInit manera adecuada de recibir datos
  ngOnInit(): void{

    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productsService.getProduct(id);
    });

  }

  fetchProduct(id: string): void {

  }

  // tslint:disable-next-line: typedef
  createProduct(){
    const newProduct: Product = {
      id: '1',
      title: 'banner nuevo',
      image: 'assets/images/banner-1.jpg',
      price: 35000,
      description: 'dsds producto'
    };
    this.productsService.createProduct(newProduct)

  }

  // tslint:disable-next-line: typedef
  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 80000,
      description: 'bla bla bla'
    };
    this.productsService.updateProduct('2', updateProduct)

  }

  // tslint:disable-next-line: typedef
  deleteProduct() {
    this.productsService.deleteProduct('243')

  }

}
