import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterLink } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { UsersHeaderComponent } from './users-header/users-header.component';





@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    ChatComponent,
    UsersHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink
     
   
  ],
  exports:[HeaderComponent,
  NavComponent,
UsersHeaderComponent]
})
export class SharedModule { }
