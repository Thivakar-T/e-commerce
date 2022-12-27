import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UnitComponent } from './unit/unit.component';
import { ItemsComponent } from './items/items.component';
import { AccountRoutingModule } from './account/account-routing.module';
import { AccountModule } from './account/account.module';
import { TableComponent } from './table/table.component';
import { MaterialsModule } from './materials/materials.module';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SeccomponentComponent } from './seccomponent/seccomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { TabComponent } from './tab/tab.component';
import { ItemstableComponent } from './itemstable/itemstable.component';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule,
    AccountModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
