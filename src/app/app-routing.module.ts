import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashbordComponent } from './component/dashboard/dashboard.component';
import { AuthGuardService } from './component/auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: DashbordComponent ,canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashbordComponent,canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
