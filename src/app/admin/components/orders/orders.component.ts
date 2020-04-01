import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Status } from '../../../orders/models/status.enum';
import { OrderModel } from '../../../orders/models/order.model';
import { AppState} from '../../../core/store/app.state';
import { select, Store } from '@ngrx/store';
import { getOrdersState } from '../../../core/store/orders/orders.selectors';
import { LoadOrders, UpdateOrder } from '../../../core/store/orders/orders.actions';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {
  ORDER_STATUS = Status;
  orders$: Observable<OrderModel[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.orders$ = this.store.pipe(select(getOrdersState))
      .pipe(
        map(state => [...state.data])
      );

    this.store.dispatch(new LoadOrders());
  }

  onChangeStatus(status: Status, order: OrderModel): void {
    this.store.dispatch(new UpdateOrder({ ...order, status }));
  }
}
