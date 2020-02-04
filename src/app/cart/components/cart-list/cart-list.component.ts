import {Component, DoCheck, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {ProductModel} from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent implements OnInit, DoCheck {

  products: ProductModel[];
  totalPrice: number;

  constructor(public cartService: CartService) { }

  ngOnInit() {

  }

  // TODO: Зачем этот хук, сделайте гетер и все будет обновляться
  ngDoCheck() {
    this.products = this.cartService.products;
    this.totalPrice = this.cartService.getTotalPrice();

  }


}
