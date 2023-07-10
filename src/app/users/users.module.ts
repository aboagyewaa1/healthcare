import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {  UsersRoutingModule } from './users-routing.module';




@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
