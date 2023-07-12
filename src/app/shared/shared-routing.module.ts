import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../users/login/login.component";
import { ViewDoctorsComponent } from "../patients/view-doctors/view-doctors.component";


const routes: Routes = [
    {
        path:'',children:[
            // {path:'login', component:LoginComponent},
        // {path:'view-doctors', component:ViewDoctorsComponent}
    ]

    }
]

@NgModule({
    imports:[RouterModule.forChild(routes),
    ],
    exports:[RouterModule]
})

export class SharedRoutingModule{

}