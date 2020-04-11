import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ordersFeatureKey, ordersReducer } from '../core/store/orders/orders.reducer';
import { OrdersEffects } from '../core/store/orders/orders.effects';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  declarations: [OrderListComponent, ProcessOrderComponent],
  exports: [OrderListComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(ordersFeatureKey, ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
