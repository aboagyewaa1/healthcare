import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsRoutingModule } from './doctors-routing.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule

  ],
  exports:[
    DashboardComponent

  ]
})
export class DoctorsModule { }
