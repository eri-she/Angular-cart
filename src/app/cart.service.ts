import { NgFor } from '@angular/common';
import { Injectable } from '@angular/core';
import { setupTestingRouterInternal } from '@angular/router/testing';
import { Iproducts } from './products/Iproducts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Iproducts[] = [];

  constructor() {}
  addToCart(product: Iproducts) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getTotal() {
    let total: number = 0;
    for (let p of this.items) {
      total += p.price;
    }
    return total;
  }
}
