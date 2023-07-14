import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {  UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { DoctorsModule } from '../doctors/doctors.module';
import { AdminModule } from '../admin/admin.module';
import { PatientsDashboardModule } from '../patients-dashboard/patients-dashboard.module';
import { RouterLink } from '@angular/router';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    DoctorsModule,
    AdminModule,
    PatientsDashboardModule,
    RouterLink,
    
  ],
  exports:[LoginComponent],
  

})
export class UsersModule { }
