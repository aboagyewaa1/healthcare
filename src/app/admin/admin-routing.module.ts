import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent1 } from "./dashboard/dashboard.component";
import { AllDoctorsComponent } from "./all-doctors/all-doctors.component";
import { AddDoctorComponent } from "./add-doctor/add-doctor.component";


const routes: Routes = [
    {
      path:'admin', component:DashboardComponent1, children:[
        {path: 'home', component: DashboardComponent1},
        {path: '', redirectTo:'home', pathMatch:'full'},
        {path: 'doctors', component: AllDoctorsComponent},
        {path: 'add-doctors', component: AddDoctorComponent},

      ]

    }
]

@NgModule({
    imports:[RouterModule.forChild(routes),
    ],
    exports:[RouterModule]
})

export class AdminRoutingModule{

}