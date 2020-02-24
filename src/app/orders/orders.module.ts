import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { CreateOrderComponent } from './components/create-order/create-order.component';



@NgModule({
  declarations: [CreateOrderComponent],
  exports: [CreateOrderComponent],
  imports: [
    SharedModule
  ]
})
export class OrdersModule { }
