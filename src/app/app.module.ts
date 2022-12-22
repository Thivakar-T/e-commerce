import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { AccountRoutingModule } from './account/account-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { MaterialsModule } from './materials/materials.module';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SeccomponentComponent } from './seccomponent/seccomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent
  ]
})
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CustomersComponent,
    AddCustomerComponent,
    SeccomponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MaterialsModule,
    AccountModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
