import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitComponent } from './unit/unit.component';
import { ItemsComponent } from './items/items.component';
import { HeaderComponent } from 'src/layout/header/header.component';

const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"items",component:ItemsComponent},
  {path:"unit",component:UnitComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
