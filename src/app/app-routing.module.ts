import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SchoolsListComponent } from './components/schools-list/schools-list.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path:  'home', component:  DashboardComponent},
  { path:  'login', component:  LoginComponent},
  { path:  'change-password', component:  ChangePasswordComponent},
  { path:  'schools-list', component:  SchoolsListComponent},
  { path:  'users-list', component:  UsersListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' , useHash : true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
