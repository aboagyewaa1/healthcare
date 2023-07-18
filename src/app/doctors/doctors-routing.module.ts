import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";



const routes: Routes = [
    {
        path:'doctors', component:DashboardComponent, children:[
        //  {path: 'doctors', redirectTo:'home', pathMatch:'full'},
        //  {path: 'home', component:HomeComponent},
        //  {path: 'chat', component:PatientsChatComponent}
    ]

    }
]

@NgModule({
    imports:[RouterModule.forChild(routes),
    ],
    exports:[RouterModule]
})

export class DoctorsRoutingModule{

}