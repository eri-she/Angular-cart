import { NgFor } from '@angular/common';
import { Injectable } from '@angular/core';
import { setupTestingRouterInternal } from '@angular/router/testing';
import { Iproducts } from './products/Iproducts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Iproducts[] = [];
  total: number = 0;
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
    this.total = 0;
    for (let p of this.items) {
      this.total += p.price;
    }
    return this.total;
  }
}
