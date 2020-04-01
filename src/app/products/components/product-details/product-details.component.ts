import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { AppState } from '../../../core/store/app.state';

import { Store } from '@ngrx/store';

import { getProductsByUrl } from '../../../core/store/products/products.selectors';
import { tap } from 'rxjs/operators';
import { loadProducts } from '../../../core/store/products/products.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {

  product$: Observable<ProductModel>;

  constructor(
    private store: Store<AppState>,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.product$ = this.store.select(getProductsByUrl)
      .pipe(
        tap(p => {
          if (!p) {
            this.store.dispatch(loadProducts());
          }
        })
      );
  }

  onAddProductToCart(product: ProductModel): void {
    this.cartService.addProduct({
      id: product.id,
      name: product.name,
      price: product.price
    });
  }
}
