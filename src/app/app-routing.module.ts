import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitComponent } from './unit/unit.component';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./../layout/layout.module').then(m => m.LayoutModule)
  },

  {path:"items",component:ItemsComponent},
  {path:"unit",component:UnitComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
