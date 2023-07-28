import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path:'',children:[
            {path:'login', component:LoginComponent},
            {path:'register', component:RegisterComponent},
        ]
    }
]

@NgModule({
    imports:[
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UsersRoutingModule{

}
