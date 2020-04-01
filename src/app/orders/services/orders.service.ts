import { Injectable } from '@angular/core';
import { ApiConfig } from '../../core/services/api-config.service';
import { HttpClient } from '@angular/common/http';
import { UserProfileService } from '../../core/services/user-profile.service';
import { Observable } from 'rxjs';
import { IOrderModel, OrderModel } from '../models/order.model';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly ordersUrl = ApiConfig.ORDERS_URL;

  constructor(
    private http: HttpClient,
    private profileService: UserProfileService
  ) {
  }

  getOrders(): Observable<OrderModel[]> {
    return this.http.get(this.ordersUrl)
      .pipe(
        map((orders: IOrderModel[]) => orders.map(order => new OrderModel(order)))
      );
  }

  getOrdersByUser(): Observable<OrderModel[]> {
    return this.getOrders()
      .pipe(
        delay(750),
        map(orders => orders.filter(order => order.userId === this.profileService.getUserId()))
      );
  }

  updateOrder(order): Observable<object> {
    return this.http.put(`${this.ordersUrl}${order.id}`, { ...order });
  }

  createOrder(order): Observable<object> {
    return this.http.post(this.ordersUrl, { ...order });
  }
}
