import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Array<any> = [];

  constructor() { }


  addToCart(product: { id: number, name: string, price: number }) {
    this.products.find(item => item.id === product.id)
      ? this.updateQuantity(product.id)
      : this.products.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
  }

  removeProduct(id: number) {
    this.products = this.products.filter(item => item.id !== id);
  }

  updateQuantity(id: number, way?: string): void {
    switch (way) {
      case '-':
        this.products = this.products.map(item => {
          if (item.id === id && item.quantity > 1) {
            item.quantity -= 1;
          }
          return item;
        });
        break;
      case '+':
      default:
        this.products = this.products.map(item => {
          if (item.id === id) {
            item.quantity += 1;
          }
          return item;
        });
    }
  }

  getItems() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

  totalPrice() {
    return this.products.reduce((acc, cur) => acc += cur.price * cur.quantity, 0);
  }
}
