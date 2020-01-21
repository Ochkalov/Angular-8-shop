import {Component, DoCheck, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit, DoCheck {
  carts: any[] = [];
  isCartsEmpty: boolean;

  constructor(private cartService: CartService ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    this.carts = this.cartService.getItems();
    this.isCartsEmpty = !this.carts.length;
  }

}
