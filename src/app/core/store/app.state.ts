import { OrdersState } from './orders/orders.state';
import { RouterState } from './router/router.state';
import { ProductsState } from './products/products.state';

export interface AppState {
  router: RouterState;
  orders: OrdersState;
  products: ProductsState;
}
