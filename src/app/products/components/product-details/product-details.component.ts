import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent {

  product$: Observable<ProductModel>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {
    const productID = this.route.snapshot.params.productID;

    if (productID) {
      this.product$ = this.productsService.getProduct$(parseInt(productID, 10));
    }

  }

  onAddProductToCart(product: ProductModel): void {
    this.cartService.addProduct({
      id: product.id,
      name: product.name,
      price: product.price
    });
  }
}
