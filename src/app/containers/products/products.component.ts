import { Product } from './../../../models/product.interaface';
import { ProductApiService } from './../../services/product-api.service';
import { Component, OnInit } from '@angular/core';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productSubs: Subscription;

  constructor(private ProductApiService: ProductApiService) { }

  ngOnInit(): void {
    this.productSubs = this.ProductApiService.getProducts() 
    .subscribe((res: Product[]) => { 
      console.log(res); 
    });
  }

}
