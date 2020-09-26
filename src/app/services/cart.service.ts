import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/models/product.interaface';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cartItems$: Observable<Product[]> = this.cartItems.asObservable();

  addItem(item: Product): void{
    this.cartItems$
      .pipe(take(1))
      .subscribe((cartItems: Product[]) => {
        this.cartItems.next([...cartItems, item]);
      });
  }

  deleteItem(id: number): void {
    this.cartItems$
      .pipe(take(1))
      .subscribe((cartItems: Product[]) => {
      const newItems = cartItems
        .filter((item: Product) => item.ID !== id);
      this.cartItems.next(newItems);
    });
  }
}
