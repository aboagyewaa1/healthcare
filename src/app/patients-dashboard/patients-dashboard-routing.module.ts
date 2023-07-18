import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientsDashboardComponent } from "./patients-dashboard.component";
import { ViewDoctorsComponent } from "./view-doctors/view-doctors.component";
import { HomeComponent } from "./home/home.component";
import { PatientsChatComponent } from "./patients-chat/patients-chat.component";


const routes: Routes = [
    {
        path:'patient-dashboard', component:PatientsDashboardComponent, children:[
         {path:'view-doctors', component:ViewDoctorsComponent},
         {path: '', redirectTo:'home', pathMatch:'full'},
         {path: 'home', component:HomeComponent},
         {path: 'chat', component:PatientsChatComponent}
    ]

    }
]

@NgModule({
    imports:[RouterModule.forChild(routes),
    ],
    exports:[RouterModule]
})

export class PatientsDashboardRoutingModule{

}