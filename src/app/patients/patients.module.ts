import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent2 } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';



@NgModule({
  declarations: [
    DashboardComponent2,
    ViewDoctorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    DashboardComponent2,
    ViewDoctorsComponent
  ]
})
export class PatientsModule { }
