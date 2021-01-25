import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    // nuestra clase ProductComponent ya tiene un decorador component con el selector y un template
    // para que angular reconozca este component (decorador) como parte de esta aplicacion lo agregaremos a (app.module.ts)
    @Input() product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        //private cartService: CartService
    ) {
        console.log('1. constructor');
    }

    // tslint:disable-next-line: typedef
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }


    // tslint:disable-next-line: typedef
    ngOnInit() {
        console.log('3. ngOnInit');
    }

    // tslint:disable-next-line: typedef
    ngDoCheck() {
        console.log('4. ngDoCheck');
    }

    // tslint:disable-next-line: typedef
    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

    // tslint:disable-next-line: typedef
    addCart() {
        console.log('Añadir al carrito');
        //this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product.id);
    }

}
