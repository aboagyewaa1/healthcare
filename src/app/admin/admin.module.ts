import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent1 } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent1
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent1
  ]
})
export class AdminModule { }
