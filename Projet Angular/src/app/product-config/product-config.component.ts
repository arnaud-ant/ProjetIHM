import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-config',
  templateUrl: './product-config.component.html',
  styleUrls: ['./product-config.component.css']
})
export class ProductConfigComponent implements OnInit {

  @Input() productItem:any;
  isVisible: boolean=false;
  constructor( ) { }

  ngOnInit(): void {
    
  }

  showDetails(): void {
    this.isVisible = !this.isVisible;
  }
}
