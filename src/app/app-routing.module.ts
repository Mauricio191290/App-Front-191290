import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';



const routes: Routes= [
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'User',
    component: UserComponent
  },
];

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
