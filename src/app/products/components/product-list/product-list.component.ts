import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { getProductsLoading, getProductsData } from '../../../core/store/products/products.selectors';
import { loadProducts } from '../../../core/store/products/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.store.dispatch(loadProducts());

    this.products$ = this.store.select(getProductsData);
    this.loading$ = this.store.select(getProductsLoading);
  }


  onAddProductToCart(product: ProductModel): void {
    this.cartService.addProduct({
      id: product.id,
      name: product.name,
      price: product.price
    });
  }
}
