import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {ProductModel} from '../models/product.model';
import {CartService} from '../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }


  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }
}
