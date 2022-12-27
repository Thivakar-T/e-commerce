import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { TableComponent } from './table/table.component';
import { SeccomponentComponent } from './seccomponent/seccomponent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialsModule } from '../materials/materials.module';
import { MaterialsRoutingModule } from '../materials/materials-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { ConfiguretermsComponent } from './configureterms/configureterms.component';
import { HomeinvoiceComponent } from './homeinvoice/homeinvoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ItemsComponent } from './items/items.component';
import { ItemstableComponent } from './itemstable/itemstable.component';
import { ManagetcsComponent } from './managetcs/managetcs.component';
import { TabComponent } from './tab/tab.component';
import { UnitComponent } from './unit/unit.component';
import { LayoutModule } from 'src/layout/layout.module';

@NgModule({
  declarations: [
    AddCustomerComponent,
    CustomersComponent,
    TableComponent,
    SeccomponentComponent,
    MainComponent,
    ConfiguretermsComponent,
    HomeinvoiceComponent,
    InvoiceComponent,
    ItemsComponent,
    ItemstableComponent,
    ManagetcsComponent,
    TabComponent,
    UnitComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    MaterialsModule,
    LayoutModule,
    MaterialsRoutingModule,
    BrowserAnimationsModule
  ],
 
})
export class PagesModule { }
