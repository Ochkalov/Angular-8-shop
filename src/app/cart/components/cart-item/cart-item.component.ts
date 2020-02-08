import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CartProductModel} from '../../models/cart.model';
import {LocalStorageService} from '../../../core/services/local-storage.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit, OnDestroy {

  @Input()
  product: CartProductModel;

  @Output()
  delete: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  changeCount: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    public localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.localStorageService.setItem('lastAddedProduct', this.product);
  }

  onIncreaseCount(count: number): void {
    this.changeCount.emit(++count);
  }

  onDecreaseCount(count: number): void {
    this.changeCount.emit(--count);
  }

  onDelete(): void {
    this.delete.emit();
  }

  ngOnDestroy() {
    const storedLastAddedProduct = this.localStorageService.getItem('lastAddedProduct');
    if (storedLastAddedProduct && storedLastAddedProduct.id === this.product.id) {
      this.localStorageService.removeItem('lastAddedProduct');
    }
  }
}
