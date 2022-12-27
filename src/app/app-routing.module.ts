import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/auth/guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./../auth/auth.module').then(m => m.AuthModule)

  },
  
  {
    path:'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),canActivate:[GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
