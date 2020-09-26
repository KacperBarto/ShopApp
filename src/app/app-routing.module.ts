
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductsComponent } from './containers/products/products.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { CartItemsComponent } from './containers/cart-items/cart-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'main-page', component: MainpageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartItemsComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
