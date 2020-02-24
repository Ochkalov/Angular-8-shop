import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {ProductDetailsComponent} from './products/components/product-details/product-details.component';
import {CartComponent} from './cart/components/cart/cart.component';
import {CreateOrderComponent} from './orders/components/create-order/create-order.component';
import {UserRole} from './core/models/role.enum';
import {AuthGuard} from './core/guards/auth.guard';
import {RoleGuard} from './core/guards/role.guard';
import {PageNotFoundComponent} from './layout/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product-list'
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product/:productID',
    component: ProductDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'order',
    component: CreateOrderComponent
  },
  {
    path: 'auth',
    canLoad: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }, {
    path: 'admin',
    canLoad: [AuthGuard, RoleGuard],
    data: {
      roles: [UserRole.ADMIN]
    },
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
