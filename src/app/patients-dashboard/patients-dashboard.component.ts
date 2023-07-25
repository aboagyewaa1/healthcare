import { Component } from '@angular/core';

@Component({
  selector: 'app-patients-dashboard',
  templateUrl: './patients-dashboard.component.html',
  styleUrls: ['./patients-dashboard.component.css']
})
export class PatientsDashboardComponent {

  navData:Array<{title:string,route:string}> = [
    {title:'Home', route:'/patient-dashboard/home'},
    {title:'Doctors', route:'/patient-dashboard/view-doctors'},
    {title: 'Chat', route:'/patient-dashboard/chat'}
  ]

}
