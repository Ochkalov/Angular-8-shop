import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../products/models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { getProductsLoaded, getProductsLoading, getProductsData } from '../../../core/store/products/products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  products$: Observable<ProductModel[]>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.products$ = this.store.select(getProductsData);
    this.loading$ = this.store.select(getProductsLoading);
    this.loaded$ = this.store.select(getProductsLoaded);
  }

}
