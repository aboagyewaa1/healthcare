import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent1 } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterLink } from '@angular/router';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';



@NgModule({
  declarations: [
    DashboardComponent1,
    AllDoctorsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
   RouterLink
  ],
  exports:[
    DashboardComponent1
  ]
})
export class AdminModule { }
