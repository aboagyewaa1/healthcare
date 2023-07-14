import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "../doctors/dashboard/dashboard.component";
import { DashboardComponent1 } from "../admin/dashboard/dashboard.component";
import { DashboardComponent2 } from "../patients/dashboard/dashboard.component";

const routes: Routes = [
    {
        path:'',children:[
            {path:'login', component:LoginComponent},
            {path:'register', component:RegisterComponent},
           
        
        ]

    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UsersRoutingModule{

}