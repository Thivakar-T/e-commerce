import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UnitComponent } from './unit/unit.component';
import { ItemsComponent } from './items/items.component';
import { TableComponent } from './table/table.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SeccomponentComponent } from './seccomponent/seccomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { TabComponent } from './tab/tab.component';
import { ItemstableComponent } from './itemstable/itemstable.component';
import { AccountRoutingModule } from './account/account-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ConfiguretermsComponent } from './configureterms/configureterms.component';
import { ManagetcsComponent } from './managetcs/managetcs.component';
import { HomeinvoiceComponent } from './homeinvoice/homeinvoice.component';
import { MaterialsModule } from './materials/materials.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    UnitComponent,
    ItemsComponent,
    AppComponent,
    TableComponent,
    CustomersComponent,
    AddCustomerComponent,
    SeccomponentComponent,
    TabComponent,
    ItemstableComponent,
    InvoiceComponent,
    ConfiguretermsComponent,
    ManagetcsComponent,
    HomeinvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    
    AccountRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MaterialsModule,
    FormsModule,
    HttpClientModule,
    
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
