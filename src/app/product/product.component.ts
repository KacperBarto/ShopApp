import { Product } from './../../models/product.interaface';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  @Input()
  product: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  removeFromCart: EventEmitter<number> = new EventEmitter<number>();

  // tslint:disable-next-line:typedef
  handleAddToCart(product: Product) {
    this.addToCart.emit(product);
  }

  handleDelete(id: number): void {
    this.removeFromCart.emit(id);
  }
}
