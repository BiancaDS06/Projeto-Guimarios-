import { AuthGuard } from './../core/guards/auth-guard';
import { LoginGuimariosComponent } from './login-guimarios/login-guimarios.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "login",
    pathMatch: "full",
    component: LoginGuimariosComponent
  },
  {
    path: "register",
    pathMatch: "full",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    pathMatch: "full",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
