import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const doctorsModule = () => import('./doctors/doctors.module').then(x => x.DoctorsModule);
const patientsModule = () => import('./patients-dashboard/patients-dashboard.module').then(x => x.PatientsDashboardModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule)

const routes: Routes = [

  {path:'', component:LandingPageComponent},
  {path:'users', loadChildren:usersModule},
  {path:'patient-dashboard', loadChildren:patientsModule},
  {path:'doctors', loadChildren:doctorsModule},
  {path:'admin', loadChildren:adminModule},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
