import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { CardComponent } from './shared/card/card.component';
import { ProvidersComponent } from './providers/providers.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    LandingPageComponent,
    OurServicesComponent,
    CardComponent,
    ProvidersComponent,
    ReviewsComponent,
    
  
    
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule
  ]
})
export class LandingPageModule { }
