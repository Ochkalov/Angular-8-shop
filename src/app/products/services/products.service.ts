import { Injectable } from '@angular/core';
import {IProductModel, ProductModel} from '../models/product.model';
import {Observable, of} from 'rxjs';
import {products} from '../mocks/products.mock';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ApiConfig} from '../../core/services/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly tasksUrl = ApiConfig.PRODUCTS_URL;

  constructor(
    private http: HttpClient
  ) { }

  getProducts$(): Observable<ProductModel[]> {
    return this.http.get(this.tasksUrl)
      .pipe(
        map((items: IProductModel[]) => {
          return items.map(product => new ProductModel(product));
        })
      );
  }

  getProduct$(id: number): Observable<ProductModel> {
    return this.http.get(this.tasksUrl + id)
      .pipe(
        map((product: IProductModel) => new ProductModel(product))
      );
  }

  addProduct(product: IProductModel): Observable<object> {
    product.id = +new Date();

    return this.http.post(this.tasksUrl, product);
  }

  editProduct(product: IProductModel): Observable<object> {
    return this.http.put(`${this.tasksUrl}${product.id}`, product);
  }
}
