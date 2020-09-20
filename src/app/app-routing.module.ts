import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {ProductsComponent} from './products/products.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  { path: 'main-page', component: MainpageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
