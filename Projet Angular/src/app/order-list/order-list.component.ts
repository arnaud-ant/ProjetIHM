import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Observable } from 'rxjs';
import { OrderConfigService } from '../order-config.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {


  order: Observable<Order> | any;

  constructor(private OrderConfigService: OrderConfigService ) { }

  ngOnInit(): void {
    this.showProduct();
  }

  showProduct(){
    this.order=this.OrderConfigService.getOrder();
  }
}
