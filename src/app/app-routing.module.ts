import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitComponent } from './unit/unit.component';
import { ItemsComponent } from './items/items.component';
import { HeaderComponent } from 'src/layout/header/header.component';
import { TableComponent } from './table/table.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SeccomponentComponent } from './seccomponent/seccomponent.component';
import { TabComponent } from './tab/tab.component';
import { ItemstableComponent } from './itemstable/itemstable.component';


const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"items",component:ItemsComponent},
  {path:"unit",component:UnitComponent},
  {path:"unit/:data",component:UnitComponent},
  {path:"tab",component:TabComponent},
  {path:"itemstable",component:ItemstableComponent},
  {path:"itemstable/:data",component:ItemstableComponent},



  

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
