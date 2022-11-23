import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductConfigService {

  productUrl = 'assets/product.json';

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<Product>(this.productUrl);
  }
}
