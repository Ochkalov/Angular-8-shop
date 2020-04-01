import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartProductModel } from '../../models/cart.model';
import { combineLatest, Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { first, map } from 'rxjs/operators';
import { AppState } from '../../../core/store/app.state';
import { Store } from '@ngrx/store';
import { CreateOrder } from '../../../core/store/orders/orders.actions';


export enum Order {
  ASC,
  DESC
}

export const OrderByOptions: { value: Order, label: string }[] = [{
  label: 'ASC',
  value: Order.ASC
}, {
  label: 'DESC',
  value: Order.DESC
}];


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  cartProducts$: Observable<CartProductModel[]>;
  totalAmount$: Observable<number>;
  totalCount$: Observable<number>;
  userId$: Observable<number>;

  Order = Order;
  orderBy: { desc: boolean; field: string } = {
    desc: true,
    field: 'price'
  };
  orderByOptions = OrderByOptions;
  productOptions: { value: string }[] = [{
    value: 'price'
  }, {
    value: 'name'
  }, {
    value: 'count'
  }];

  constructor(
    private store: Store<AppState>,
    private cartService: CartService,
    private profileService: UserProfileService
  ) {
  }

  ngOnInit() {
    this.cartProducts$ = this.cartService.cartProducts$;
    this.totalCount$ = this.cartService.totalCount$;
    this.totalAmount$ = this.cartService.totalAmount$;
    this.userId$ = this.profileService.user$
      .pipe(
        map(user => user ? user.id : null)
      );
  }

  onDeleteProductFromCart(id: number): void {
    this.cartService.deleteProduct(id);
  }

  onChangeCount({count, id}): void {
    this.cartService.changeProductCount(id, count);
  }

  onClear(): void {
    this.cartService.deleteAll();
  }

  onOrderByChanged(value: Order): void {
    this.orderBy = {...this.orderBy, desc: !!(Number(value))};
  }

  onFieldNameChanged(value: string): void {
    this.orderBy = {...this.orderBy, field: value};
  }

  onCreateOrder(): void {
    combineLatest(
      this.cartProducts$,
      this.totalAmount$,
      this.userId$
    ).pipe(
      first()
    ).subscribe(([products, totalAmount, userId]) => {
      this.store.dispatch(new CreateOrder({
        id: +new Date(),
        products: products.map(p => p.id),
        totalAmount,
        userId
      }));

      this.onClear();
    });
  }
}
