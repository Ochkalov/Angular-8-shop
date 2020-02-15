import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import {CartComponent} from './components/cart/cart.component';
import {SharedModule} from '../shared/shared.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [CartListComponent, CartComponent, CartItemComponent],
  exports: [
    CartComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class CartModule { }
