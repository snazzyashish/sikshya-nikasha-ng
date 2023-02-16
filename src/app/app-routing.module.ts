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
import { FiscalYearComponent } from './components/fiscal-year/fiscal-year.component';
import { MagFormItemComponent } from './components/magform-item/magform-item.component';
import { SignatoryComponent } from './components/signatory/signatory.component';
import { AcademicYearComponent } from './components/academic-year/academic-year.component';
import { MagFormSettingComponent } from './components/magform-setting/magform-setting.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeDetailUpdateComponent } from './components/employee-detail-update/employee-detail-update.component';
import { EmployeeDetailViewComponent } from './components/employee-detail-view/employee-detail-view.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path:  'home', component:  DashboardComponent},
  { path:  'login', component:  LoginComponent},
  { path:  'change-password', component:  ChangePasswordComponent},
  { path:  'schools-list', component:  SchoolsListComponent},
  { path:  'users-list', component:  UsersListComponent},
  { path:  'fiscal-year', component:  FiscalYearComponent},
  { path:  'academic-year', component:  AcademicYearComponent},
  { path:  'magform-item-list', component:  MagFormItemComponent},
  { path:  'magform-setting', component:  MagFormSettingComponent},
  { path:  'signatory', component:  SignatoryComponent},
  { path:  'employee-detail', component:  EmployeeDetailComponent},
  { path:  'employee-detail/update/:id', component:  EmployeeDetailUpdateComponent},
  { path:  'employee-detail/view/:id', component:  EmployeeDetailViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' , useHash : true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
