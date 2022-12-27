import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountRoutingModule } from './account/account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AccountModule } from './account/account.module';
import { LayoutModule } from 'src/layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthRoutingModule } from 'src/auth/auth-routing.module';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    AccountModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MaterialsModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    LayoutModule,
    PagesModule,
    PagesRoutingModule,
    AuthModule,
    AuthRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
