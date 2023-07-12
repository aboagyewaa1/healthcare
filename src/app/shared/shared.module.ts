import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterLink } from '@angular/router';





@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterLink
     
   
  ],
  exports:[HeaderComponent,
  NavComponent]
})
export class SharedModule { }
