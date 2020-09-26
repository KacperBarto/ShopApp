import { SearchResultsComponent } from './search-results/search-results.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductsComponent } from './containers/products/products.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartItemComponent } from './cart-item/cart-item.component';

const routes: Routes = [
  { path: 'main-page', component: MainpageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartItemComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'search-resutls/:value', component: SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
