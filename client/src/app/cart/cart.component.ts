import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Programación', price: 450},
  {position: 2, name: 'Angular', price: 300},
  {position: 3, name: 'Django', price: 260},
];


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'eliminar', 'price'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
