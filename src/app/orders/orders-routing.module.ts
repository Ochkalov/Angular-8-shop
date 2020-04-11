import { OrderListComponent } from './components/order-list/order-list.component';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  redirectTo: 'list'
}, {
  path: 'list',
  component: OrderListComponent
}, {
  path: 'process',
  component: ProcessOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
