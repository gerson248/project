import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [FormProductComponent, NavComponent, ProductEditComponent, ProductFormComponent, ProductsListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
