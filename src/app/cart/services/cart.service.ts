import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }


  addToCart(product) {
    // тут мутация данных
    this.items.push(product);
    console.log('this.items', this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    // а тут немутация данных, разные подходы
    this.items = [];
    return this.items;
  }
}
