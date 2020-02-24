import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ProductModel} from '../../../products/models/product.model';
import {ProductsService} from '../../../products/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  products$: Observable<ProductModel[]> = this.productsService.getProducts$();

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {}

}
