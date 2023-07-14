import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterLink } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { UsersHeaderComponent } from './users-header/users-header.component';
import { OpenChatComponent } from './open-chat/open-chat.component';





@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    ChatComponent,
    UsersHeaderComponent,
    OpenChatComponent
  ],
  imports: [
    CommonModule,
    RouterLink
     
   
  ],
  exports:[HeaderComponent,
  NavComponent,
UsersHeaderComponent,
ChatComponent,
OpenChatComponent
]
})
export class SharedModule { }
