import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
  ) {
    
    this.buildForm();
  }

  // solo llamar datos
  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  saveProduct(event: Event){
    
    event.preventDefault();
    console.log('AQUIIII 1');
    if (this.form.valid){
      console.log('PASOOOOO');
      const product = this.form.value;
      this.productsService.createProduct(product)
      /*.subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });*/
    }
  }

  // tslint:disable-next-line: typedef
  private buildForm() {
    this.form = this.formBuilder.group({
      
      id: ['', [Validators.required]],
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
