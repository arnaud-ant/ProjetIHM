import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderConfigService {

  orderUrl = 'assets/order.json';

  constructor(private http: HttpClient) { }

  getOrder() {
    return this.http.get<Order>(this.orderUrl);
  }
}
