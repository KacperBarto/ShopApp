import { Product } from './../../models/product.interaface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent{

  @Input() cartItem: Product;
}
















