import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientsDashboardComponent } from "./patients-dashboard.component";
import { ViewDoctorsComponent } from "./view-doctors/view-doctors.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
    {
        path:'', component:PatientsDashboardComponent, children:[
            // {path:'login', component:LoginCompo},
        {path:'view-doctors', component:ViewDoctorsComponent},
        {path: '', redirectTo:'home', pathMatch:'full'},
        {path: 'home', component:HomeComponent}
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