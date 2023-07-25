import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent1 {
  navData1:Array<{title:string,route:string}> = [
    {title:'Home', route:'/admin/home'},
    {title:'Doctors', route:'/admin/doctors'},
    {title: 'Chat', route:'/admin/chat'}
  ]

}
