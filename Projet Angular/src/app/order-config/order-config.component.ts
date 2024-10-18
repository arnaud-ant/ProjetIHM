import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-config',
  templateUrl: './order-config.component.html',
  styleUrls: ['./order-config.component.css']
})
export class OrderConfigComponent implements OnInit {
  @Input() orderItem:any;
  isVisible: boolean=false;
  
  constructor( ) { }

  ngOnInit(): void {
    
  }

  showDetails(): void {
    this.isVisible = !this.isVisible;
  }
}
