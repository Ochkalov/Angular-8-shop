import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product.model';

const productList: Array<ProductModel> = [
  new ProductModel(1, 'Book', true, 10),
  new ProductModel(2, 'Excel', true, 20),
  new ProductModel(3, 'Samsung', false, 30)
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
