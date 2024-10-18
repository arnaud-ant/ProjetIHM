import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css']
})
export class UserConfigComponent implements OnInit {

  @Input() userItem:any;
  isVisible: boolean=false;
  constructor( ) { }

  ngOnInit(): void {
    
  }
  showDetails(): void{
    this.isVisible = !this.isVisible;
  }
}