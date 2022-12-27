import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from 'src/layout/header/header.component';
import { FooterComponent } from 'src/layout/footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    
  ]
})
export class AccountModule { }
