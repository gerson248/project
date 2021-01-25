import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  // inicializamos un array en 0 productos
  private cart = new BehaviorSubject<Product[]>([]);

  // variable publica que pueda ser preguntada por cualquier componenete y que sea de tipo de
  // observable(para que cualqueira se suscriba a el para notar sus cambios en tiempo real)
  cart$ = this.cart.asObservable();

  constructor() { }
  // metodo para agregar al carrito
  // le envio un producto de tipo product
  // tslint:disable-next-line: typedef
  addCart(product: Product){
    // cada vez que agreguen algo al carrito inserten una nueva variable
    // practica de no mutaciones (no usar push)
    // cada vez va generar una nueva referencia del arreglo para no tener problemas de inmutabilidad
    // con esto no tendremos problemas hacer referencia al mismo array (simplemente crea un nuevo estado del arreglo)
    this.products = [...this.products, product];

    // notitificar a todos lo componenetes que estan suscritos que hubo un cambio
    // (mandaria la copia del array actual de ese nuevo estado creado)
    // cualquier componenete puede pregutnar y ver que productos haye n el carrito
    this.cart.next(this.products);
  }
}
