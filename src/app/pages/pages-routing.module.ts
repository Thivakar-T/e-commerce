import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { TableComponent } from './table/table.component';
import { SeccomponentComponent } from './seccomponent/seccomponent.component';
const routes: Routes = [
 
    { path: 'Add-customer', component: AddCustomerComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'table', component: TableComponent },
    { path: 'second', component: SeccomponentComponent },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
