import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Array<any> = [];
  totalPrice = 0;
  totalQuantity = 0;

  constructor() { }

// TODO: тип параметра можео задать, например так Partial<ProductModel>
  addToCart(product: { id: number, name: string, price: number }) {
    this.products.find(item => item.id === product.id)
      ? this.updateQuantity(product.id)
      // TODO: мутирование
      : this.products.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    this.updateTotals();
  }

  removeProduct(id: number) {
    // TODO: НЕмутирование
    this.products = this.products.filter(item => item.id !== id);
    this.updateTotals();
  }

  updateQuantity(id: number, way?: string): void {
    switch (way) {
      case '-':
        // TODO: НЕмутирование
        this.products = this.products.map(item => {
          if (item.id === id && item.quantity > 1) {
            item.quantity -= 1;
          }
          return item;
        });
        break;
      case '+':
      default:
        // TODO: НЕмутирование
        this.products = this.products.map(item => {
          if (item.id === id) {
            item.quantity += 1;
          }
          return item;
        });
    }
    this.updateTotals();
  }

  updateTotalQuantity() {
    this.totalQuantity = this.products.reduce((acc, cur) => acc += cur.quantity, 0);
  }

  updateTotals() {
    this.getTotalPrice();
    this.updateTotalQuantity();
  }

  cartProducts() {
    return this.products;
  }

  clearCart() {
    // TODO: НЕмутирование
    this.products = [];
    this.totalPrice = 0;
    this.totalQuantity = 0;

    return this.products;
  }

  getTotalPrice() {
    return this.products.reduce((acc, cur) => acc += cur.price * cur.quantity, 0);
  }
}
