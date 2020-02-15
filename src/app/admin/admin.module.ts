import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import {AdminComponent} from './components/admin/admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';

const components = [
  AdminComponent,
  ProductsComponent,
  ProductFormComponent,
  OrdersComponent
];


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
