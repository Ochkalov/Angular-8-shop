import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { OrdersState } from '../../../core/store/orders/orders.state';
import { AppState } from '../../../core/store/app.state';
import { getOrdersState } from '../../../core/store/orders/orders.selectors';
import { LoadOrdersByUser } from '../../../core/store/orders/orders.actions';
import { Status } from '../../models/status.enum';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class OrderListComponent implements OnInit {
  ordersState$: Observable<OrdersState>;

  constructor(
    private store: Store<AppState>
  ) {
    this.ordersState$ = this.store.pipe(select(getOrdersState));

    this.store.dispatch(new LoadOrdersByUser());
  }

  ngOnInit() {}

  getBadgeColor(status: Status): string {
    if (status === Status.CONFIRMED) {
      return 'warning';
    } else if (status === Status.MODERATING) {
      return 'info';
    } else {
      return 'success';
    }
  }
}
