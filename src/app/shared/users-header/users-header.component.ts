import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.css']
})
export class UsersHeaderComponent {

  @Input() title!: string
  

}
