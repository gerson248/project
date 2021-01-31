import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  // products que sea un observable que sea un array de productos
  // lo que es un flujo de datos se coloca con el signo dolar products$
  products$!: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    // asignamos directamente el array cart
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
