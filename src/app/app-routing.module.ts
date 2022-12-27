import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitComponent } from './unit/unit.component';
import { ItemsComponent } from './items/items.component';
import { HeaderComponent } from 'src/layout/header/header.component';
import { TabComponent } from './tab/tab.component';
import { ItemstableComponent } from './itemstable/itemstable.component';
import { GuardGuard } from 'src/auth/guard';
import { ConfiguretermsComponent } from './configureterms/configureterms.component';
import { HomeinvoiceComponent } from './homeinvoice/homeinvoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ManagetcsComponent } from './managetcs/managetcs.component';
import { TableComponent } from './pages/table/table.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { SeccomponentComponent } from './pages/seccomponent/seccomponent.component';

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
  {path:'sec',component:SeccomponentComponent},

  {
    path: '',
    loadChildren: () => import('./../auth/auth.module').then(m => m.AuthModule)

  },
  
  {
    path:'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),canActivate:[GuardGuard]
  },
  {path:'invoice',component:InvoiceComponent},
  {path:'configureterms',component:ConfiguretermsComponent},
  {path:'managetcs',component:ManagetcsComponent},
  {path:'homeinvoice',component:HomeinvoiceComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
