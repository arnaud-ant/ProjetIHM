import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderConfigComponent } from './order-config/order-config.component';

import { ProductConfigComponent } from './product-config/product-config.component';
import { UserConfigComponent } from './user-config/user-config.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';


const routes: Routes = [
  { path : 'product-config', component: ProductListComponent},
  { path : 'user-config', component: UserListComponent },
  { path : 'order-config', component: OrderListComponent },
  { path : 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
