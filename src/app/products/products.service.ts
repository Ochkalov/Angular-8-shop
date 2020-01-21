import { Injectable } from '@angular/core';
import {ProductModel} from './models/product.model';

const productList: Array<ProductModel> = [
  new ProductModel(1, 'Book'),
  new ProductModel(2, 'Excel'),
  new ProductModel(3, 'Samsung')
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }


  getProducts() {
    return productList;
  }
}
