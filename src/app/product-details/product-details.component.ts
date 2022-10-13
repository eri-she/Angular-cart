import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products/products';
import { Iproducts } from '../products/Iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products: Iproducts = {} as Iproducts;
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  addToCart() {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.products);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // we added a "+"" to make sure this is a number, we are updating the variable id with the index and sending the number as parameter to the routing module.
      this.id = +params['productId'];
      // with the products array and index we can target an specific product to be displayed in the html of this component.
      this.products = products[this.id];
    });
  }
}
