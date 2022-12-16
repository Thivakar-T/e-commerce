import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SeccomponentComponent } from './seccomponent/seccomponent.component';

const routes: Routes = [
  {path:'',component:TableComponent},
  {path:'Customer',component:CustomersComponent},
  {path:'Add-Customer',component:AddCustomerComponent},
  {path:'sec',component:SeccomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
