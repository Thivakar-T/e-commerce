import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialsModule } from 'src/app/materials/materials.module';
@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass: JwtInterceptor,multi:true}
  ]

})
export class AuthModule { }
