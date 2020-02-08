import { Injectable } from '@angular/core';
import {IProductModel, ProductModel} from '../models/product.model';
import {Observable, of} from 'rxjs';
import {products} from '../mocks/products.mock';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts$(): Observable<ProductModel[]> {
    return of(products)
      .pipe(
        map((items: IProductModel[]) => {
          return items.map(product => new ProductModel(product));
        })
      );
  }
}
