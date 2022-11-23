import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductConfigService } from '../product-config.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Observable<Product> | any;

  constructor(private productConfigService: ProductConfigService ) { }

  ngOnInit(): void {
    this.showProduct();
  }

  showProduct(){
    this.product=this.productConfigService.getProduct();
  }

}
