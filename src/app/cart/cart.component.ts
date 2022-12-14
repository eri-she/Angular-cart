import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Iproducts } from '../products/Iproducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Iproducts[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.total = this.cartService.getTotal();
    this.items = this.cartService.getItems();
  }
}
