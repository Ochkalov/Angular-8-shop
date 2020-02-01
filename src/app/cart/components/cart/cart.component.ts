import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';

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
export class CartComponent implements OnInit {

  constructor(private cartService: CartService ) { }

  @Input() product: CartItem;

  ngOnInit() {
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
}
