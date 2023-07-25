import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent1 } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterLink } from '@angular/router';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { UsersModule } from '../users/users.module';
import { PatientsDashboardModule } from '../patients-dashboard/patients-dashboard.module';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';



@NgModule({
  declarations: [
    DashboardComponent1,
    AllDoctorsComponent,
    AddDoctorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
   RouterLink,
   PatientsDashboardModule
  
  ],
  exports:[
    DashboardComponent1
  ]
})
export class AdminModule { }
