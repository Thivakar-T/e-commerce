import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { TableComponent } from './table/table.component';
import { SeccomponentComponent } from './seccomponent/seccomponent.component';
import { ConfiguretermsComponent } from './configureterms/configureterms.component';
import { HomeinvoiceComponent } from './homeinvoice/homeinvoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ItemsComponent } from './items/items.component';
import { ItemstableComponent } from './itemstable/itemstable.component';
import { ManagetcsComponent } from './managetcs/managetcs.component';
import { TabComponent } from './tab/tab.component';
import { UnitComponent } from './unit/unit.component';
import { MainComponent } from './main/main.component';
import { GuardGuard } from 'src/auth/guard';

const routes: Routes = [
  { path: 'main', component:MainComponent,
  children:[
    { path: 'Add-customer', component: AddCustomerComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'table', component: TableComponent },
    { path: 'second', component: SeccomponentComponent },
    { path: 'configureterms', component: ConfiguretermsComponent },
    { path: 'homeinvoice', component: HomeinvoiceComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'managetcs', component: ManagetcsComponent },
    { path: 'tab', component: TabComponent },
    { path: 'unit', component: UnitComponent},
    { path: 'itemstable', component: ItemstableComponent},
  ],
 canActivate:[GuardGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
