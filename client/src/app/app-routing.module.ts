import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

// creando rutas
const routes: Routes = [
  {
    // no lee niguna ruta
    path: '',
    component: LayoutComponent,
    children: [
      {
        // no lee niguna ruta
        path: '',
        // lo redirecciona al home
        redirectTo: '/home',
        // cuando esa url tenga un match con home lo mandara a home
        pathMatch: 'full',
      },
      {
        path: 'home',
        // component: HomeComponent
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        // canActivate: [AdminGuard],
        // component: ProductsComponent
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'order',
        // canActivate: [AdminGuard],
        // component: ContactComponent
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
    ],
  },
  {
    // ** nos indica que no hizo match con nadie
    path: 'admin',
    // component: PageNotFoundComponent
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    // ** nos indica que no hizo match con nadie
    path: '**',
    // component: PageNotFoundComponent
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
