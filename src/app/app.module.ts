import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { MaterialsModule } from 'src/materials/materials.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UnitComponent } from './unit/unit.component';
import { ItemsComponent } from './items/items.component';
import { AccountRoutingModule } from './account/account-routing.module';
import { AccountModule } from './account/account.module';


@NgModule({
  declarations: [
    AppComponent,
    UnitComponent,
    ItemsComponent,
   
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
    AccountModule
    

    
    

  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
