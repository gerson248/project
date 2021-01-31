import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Lima', abbreviation: 'LI'},
    {name: 'Chorrillos', abbreviation: 'CH'},
    {name: 'San Juan Lurigancho', abbreviation: 'SJL'},
    {name: 'Comas', abbreviation: 'CO'},
    {name: 'Lince', abbreviation: 'LC'},
    {name: 'Surco', abbreviation: 'SU'},
    {name: 'La Molina', abbreviation: 'MO'},
    {name: 'San Miguel', abbreviation: 'SM'},
  ];

  constructor(private fb: FormBuilder) {}

  // tslint:disable-next-line: typedef
  onSubmit() {
    alert('SE REGISTRO SU CURSO CORRECTAMENTE, GRACIAS!');
  }
}
