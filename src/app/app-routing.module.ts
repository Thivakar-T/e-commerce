import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/auth/guard';
import { ConfiguretermsComponent } from './configureterms/configureterms.component';
import { HomeinvoiceComponent } from './homeinvoice/homeinvoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ManagetcsComponent } from './managetcs/managetcs.component';

const routes: Routes = [

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
