import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
      path: '',
      component: ProductsComponent
  },
  {
      path: ':id',
      component: ProductDetailComponent
  }
];

@NgModule({
  imports: [
      // forChild crea un módulo que contiene todas las directivas y las rutas dadas,
      // pero no incluye el servicio de enrutador.
      RouterModule.forChild(routes),
  ],
  exports: [
      RouterModule
  ]
})
export class ProductRoutingModule {}
