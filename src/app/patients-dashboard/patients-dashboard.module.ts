import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PatientsDashboardRoutingModule } from './patients-dashboard-routing.module';
import { PatientsDashboardComponent } from './patients-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { HomeComponent } from './home/home.component';
import { PatientsChatComponent } from './patients-chat/patients-chat.component';


@NgModule({
  declarations: [
    PatientsDashboardComponent,
    ViewDoctorsComponent,
    HomeComponent,
    PatientsChatComponent
   
  ],
  imports: [
    CommonModule,
    RouterLink,
    PatientsDashboardRoutingModule,
    SharedModule

     
   
  ],
  exports:[ViewDoctorsComponent]
})
export class PatientsDashboardModule { }
