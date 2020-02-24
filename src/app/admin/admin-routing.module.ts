import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ProductResolveGuard} from './guards/product-resolve.guard';
import {OrdersComponent} from './components/orders/orders.component';
import {CanDeactivateGuard} from '../core/guards/can-deactivate.guard';



const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'products',
    component: ProductsComponent
  }, {
    path: 'product',
    children: [{
      path: 'add',
      component: ProductFormComponent,
      canDeactivate: [CanDeactivateGuard]
    }, {
      path: 'edit/:productID',
      resolve: {
        product: ProductResolveGuard
      },
      component: ProductFormComponent,
      canDeactivate: [CanDeactivateGuard]
    }]
  }, {
    path: 'orders',
    component: OrdersComponent
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
