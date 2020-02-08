import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {LocalStorageService} from '../../../core/services/local-storage.service';
import {CartProductModel} from '../../models/cart.model';
import {Observable} from 'rxjs';
import {CartService} from '../../services/cart.service';


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

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts$ = this.cartService.cartProducts$;
    this.totalCount$ = this.cartService.totalCount$;
    this.totalAmount$ = this.cartService.totalAmount$;
  }

  onDeleteProductFromCart(id: number): void {
    this.cartService.deleteProduct(id);
  }

  onChangeCount({ count, id }): void {
    this.cartService.changeProductCount(id, count);
  }

  onClear(): void {
    this.cartService.deleteAll();
  }

  onOrderByChanged(value: Order): void {
    this.orderBy = {...this.orderBy, desc: !!(Number(value)) };
  }

  onFieldNameChanged(value: string): void {
    this.orderBy = { ...this.orderBy, field: value };
  }
}
