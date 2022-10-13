import { NgModule, ɵisListLikeIterable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PListComponent } from './p-list/p-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: PListComponent,
  },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: `cart`, component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
