import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ordersFeatureKey, ordersReducer } from '../core/store/orders/orders.reducer';
import { OrdersEffects } from '../core/store/orders/orders.effects';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [OrderListComponent],
  exports: [OrderListComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature(ordersFeatureKey, ordersReducer),
    EffectsModule.forFeature([OrdersEffects])
  ]
})
export class OrdersModule { }
