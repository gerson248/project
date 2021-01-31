import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form!: FormGroup;
  id!: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    // para obtener el id de la ruta
    private activateRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  // solo llamar datos
  ngOnInit(): void {

    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
    });
  }

  // tslint:disable-next-line: typedef
  saveProduct(event: Event){
    // event.preventDefault(); evita que recargue la pagina
    event.preventDefault();
    console.log('AQUIIII 1');
    if (this.form.valid){
      console.log('PASOOOOO');
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
    }
  }

  // tslint:disable-next-line: typedef
  private buildForm() {
    this.form = this.formBuilder.group({

      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  // tslint:disable-next-line: typedef
  get priceField() {
    // tslint:disable-next-line: no-non-null-assertion
    return this.form.get('price');
  }

}
