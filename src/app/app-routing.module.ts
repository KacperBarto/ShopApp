import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
const routes: Routes = [
  { path: 'main-page', component: MainpageComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent},
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
