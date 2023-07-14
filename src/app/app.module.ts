import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { PatientsDashboardComponent } from './patients-dashboard/patients-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
   
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    UsersModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
