import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {LocalStorageService} from '../../../core/services/local-storage.service';

interface CartItem {
  id: number;
  price: number;
  name: string;
  quantity: number;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(
    private cartService: CartService,
    public localStorageService: LocalStorageService,
  ) { }

  @Input() product: CartItem;

  ngOnInit() {
    this.localStorageService.setItem('lastAddedProduct', this.product);
  }

  clearCarts() {
    this.cartService.clearCart();
  }

  onUpdateQuantity(id: number, way: string) {
    this.cartService.updateQuantity(id, way);
  }

  onRemoveProduct(id: number){
    this.cartService.removeProduct(id);
  }

  ngOnDestroy() {
    const storedLastAddedProduct = this.localStorageService.getItem('lastAddedProduct');
    if (storedLastAddedProduct && storedLastAddedProduct.id === this.product.id) {
      this.localStorageService.removeItem('lastAddedProduct');
    }
  }
}
