import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../../cart/services/cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts$();
  }


  onAddProductToCart(product: ProductModel): void {
    this.cartService.addProduct({
      id: product.id,
      name: product.name,
      price: product.price
    });
  }
}
