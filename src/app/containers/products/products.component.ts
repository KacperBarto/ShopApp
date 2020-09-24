import { Product } from './../../../models/product.interaface';
import { ProductApiService } from './../../services/product-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription }  from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit{
  products: Observable<Product[]>;
  // productSubs: Subscription;
  constructor(private ProductApiService: ProductApiService) { }

  ngOnInit(): void {
    this.products = this.ProductApiService.getProducts();
    // this.productSubs = this.ProductApiService.getProducts() 
    // .subscribe((res: Product[]) => { 
    //   console.log(res); 
    // });
  //   this.productSubs = this.ProductApiService.getProduct(4) 
  //   .subscribe((res: Product) => { 
  //     console.log(res); 
  //   });
  // }

    } 

  // ngOnDestoy() {
  //   this.productSubs.unsubscribe();
  // }
}