import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [

  {path:'', component:LandingPageComponent},
  {path:'', loadChildren:usersModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
