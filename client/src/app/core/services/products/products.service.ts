import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  private products : Product[] = [
    {
      id: '1',
      title: 'Curso de programación',
      price: 50000,
      description: 'Este curso nos ayudara aprender a programar',
      image: 'assets/images/producto1.jpg',
    },
    {
      id: '2',
      title: 'Curso de HTML y CSS',
      price: 50000,
      description: 'Este curso nos ayudara aprender a programar',
      image: 'assets/images/producto2.jpg',
    },
    {
      id: '3',
      title: 'Curso de Angular',
      price: 50000,
      description: 'Este curso nos ayudara aprender a programar',
      image: 'assets/images/producto3.jpg',
    },
    {
      id: '4',
      title: 'Curso de Django',
      price: 50000,
      description: 'Este curso nos ayudara aprender a programar',
      image: 'assets/images/producto4.jpg',
    },
    {
      id: '5',
      title: 'Curso de Flutter',
      price: 50000,
      description: 'Este curso nos ayudara aprender a programar',
      image: 'assets/images/producto5.jpg',
    },

  ];



    // tslint:disable-next-line: typedef
    getAllProducts() {
      // return this.products

      return this.products;
    }

    // tslint:disable-next-line: typedef
    getProduct(id: string) {
      return this.products.find(item => id === item.id);
      
    }
  
    // tslint:disable-next-line: typedef
    createProduct(product: Product){
      
    }
  
    // tslint:disable-next-line: typedef
    updateProduct(id: string, changes: Partial<Product>){
      
    }
  
    // tslint:disable-next-line: typedef
    deleteProduct(id: string){
      
    }


}