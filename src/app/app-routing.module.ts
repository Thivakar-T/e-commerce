import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/auth/guard';
import { TableComponent } from './pages/table/table.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { SeccomponentComponent } from './pages/seccomponent/seccomponent.component';
import { LoginComponent } from 'src/auth/login/login.component';
import { HeaderComponent } from 'src/layout/header/header.component';
import { FooterComponent } from 'src/layout/footer/footer.component';
const routes: Routes = [
  
  // {path:'',component:TableComponent},
  // {path:'Customer',component:CustomersComponent},
  // {path:'Add-Customer',component:AddCustomerComponent},
  // {path:'sec',component:SeccomponentComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HeaderComponent},
  {path:'footer',component:FooterComponent},

  // {
  //   path: '',
  //   loadChildren: () => import('./../auth/auth.module').then(m => m.AuthModule)

  // },
  
  // {
  //   path:'pages',
  //   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),canActivate:[GuardGuard]
  // },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
