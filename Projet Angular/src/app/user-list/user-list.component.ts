import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { UserConfigService } from '../user-config.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: Observable<User> | any;
  constructor(private UserConfigService: UserConfigService ) { }
  ngOnInit(): void {
    this.showProduct();
  }

  showProduct(){
    this.user=this.UserConfigService.getUser();
  }


}
