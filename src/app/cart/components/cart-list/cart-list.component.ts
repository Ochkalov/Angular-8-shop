import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {ProductModel} from '../../../products/models/product.model';
import {CartProductModel} from '../../models/cart.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent {
  @Input()
  cartProducts: CartProductModel[];

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  changeCount: EventEmitter<{ id: number, count: number }> = new EventEmitter<{ id: number, count: number }>();

  constructor() { }

  onDelete(id: number): void {
    this.delete.emit(id);
  }

  onChangeCount(count: number, id: number): void {
    if (count === 0) {
      this.onDelete(id);
      return;
    }

    this.changeCount.emit({ id, count });
  }
}
