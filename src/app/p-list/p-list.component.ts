import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
import { Iproducts } from '../products/Iproducts';

@Component({
  selector: 'app-p-list',
  templateUrl: './p-list.component.html',
  styleUrls: ['./p-list.component.css'],
})
export class PListComponent implements OnInit {
  products: Array<Iproducts> = products;
  constructor() {}

  ngOnInit(): void {}
}
