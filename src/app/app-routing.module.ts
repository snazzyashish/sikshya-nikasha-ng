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
import { ScholarshipListComponents } from './components/scholarship-list/scholarship-list.component';
import { StationaryComponent } from './components/stationary/stationary.component';
import { AdministrativeExpensesComponent } from './components/administrative-expenses/administrative-expenses.component';
import { InfrastructureListComponent } from './components/insfrastructure-list/insfrastructure-list.component';
import { GradeLimitComponent } from './components/grade-limit/grade-limit.component';
import { CreateGradeLimitComponent } from './components/create-grade-limit/create-grade-limit.component';
import { GradeLimitViewComponent } from './components/grade-limit-view/grade-limit-view.component';
import { BasicScaleListComponent } from './components/basic-scale-list/basic-scale-list.component';
import { CreateBasicScaleComponent } from './components/create-basic-scale/create-basic-scale.component';
import { ViewBasicScaleComponent } from './components/view-basic-scale/view-basic-scale.component';
import { GradeScaleListComponent } from './components/grade-scale-list/grade-scale-list.component';
import { GradeScaleViewComponent } from './components/grade-scale-view/grade-scale-view.component';
import { GradeScaleCreateComponent } from './components/grade-scale-create/grade-scale-create.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path:  'home', component:  DashboardComponent, data: { title: 'DASHBOARD' }},
  { path:  'login', component:  LoginComponent, data: { title: 'LOGIN' }},
  { path:  'change-password', component:  ChangePasswordComponent, data: { title: 'CHANGE PASSWORD' }},
  { path:  'schools-list', component:  SchoolsListComponent, data: { title: 'LIST SCHOOLS' }},
  { path:  'users-list', component:  UsersListComponent, data: { title: 'LIST USERS' }},
  { path:  'fiscal-year', component:  FiscalYearComponent, data: { title: 'LIST FISCAL YEARS' }},
  { path:  'academic-year', component:  AcademicYearComponent, data: { title: 'LIST ACADEMIC YEARS' }},
  { path:  'signatory', component:  SignatoryComponent, data: { title: 'LIST SIGNATORY' }},
  { path:  'scholarship/list', component:  ScholarshipListComponents, data: { title: 'LIST SCHOLARSHIP' }},
  { path:  'stationary/list', component:  StationaryComponent, data: { title: 'LIST STATIONARY' }},
  { path:  'administrative-expenses', component:  AdministrativeExpensesComponent, data: { title: 'LIST ADMINISTRATIVE EXPENSES' }},
  { path:  'infrastructure/list', component:  InfrastructureListComponent, data: { title: 'LIST INSFRASTRUCTURES' }},

  { path:  'magform-item-list', component:  MagFormItemComponent, data: { title: 'LIST MAGFORM ITEMS' }},
  { path:  'magform-setting', component:  MagFormSettingComponent, data: { title: 'LIST MAGFORM SETTING' }},

  { path:  'employee-detail/list', component:  EmployeeDetailComponent, data: { title: 'LIST EMPLOYEE DETAIL' }},
  { path:  'employee-detail/update/:id', component:  EmployeeDetailUpdateComponent, data: { title: 'UPDATE EMPLOYEE DETAIL' }},
  { path:  'employee-detail/create', component:  EmployeeDetailUpdateComponent, data: { title: 'CREATE EMPLOYEE DETAIL' }},
  { path:  'employee-detail/view/:id', component:  EmployeeDetailViewComponent, data: { title: 'VIEW EMPLOYEE DETAIL' }},


  
  { path:  'grade-limit/list', component:  GradeLimitComponent, data: { title: 'LIST GRADE LIMIT' }},
  { path:  'grade-limit/create', component:  CreateGradeLimitComponent, data: { title: 'CREATE GRADE LIMIT' }},
  { path:  'grade-limit/update/:id', component:  CreateGradeLimitComponent, data: { title: 'UPDATE GRADE LIMIT' }},
  { path:  'grade-limit/view/:id', component:  GradeLimitViewComponent, data: { title: 'VIEW GRADE LIMIT' }},

  { path:  'basic-scale/list', component:  BasicScaleListComponent, data: { title: 'LIST BASIC SCALE' }},
  { path:  'basic-scale/create', component:  CreateBasicScaleComponent, data: { title: 'CREATE BASIC SCALE' }},
  { path:  'basic-scale/update/:id', component:  CreateBasicScaleComponent, data: { title: 'UPDATE BASIC SCALE' }},
  { path:  'basic-scale/view/:id', component:  ViewBasicScaleComponent, data: { title: 'VIEW BASIC SCALE' }},

  { path:  'grade-scale/list', component:  GradeScaleListComponent, data: { title: 'LIST GRADE SCALE' }},
  { path:  'grade-scale/create', component:  GradeScaleCreateComponent, data: { title: 'CREATE GRADE SCALE' }},
  { path:  'grade-scale/update/:id', component:  GradeScaleCreateComponent, data: { title: 'UPDATE GRADE SCALE' }},
  { path:  'grade-scale/view/:id', component:  GradeScaleViewComponent, data: { title: 'VIEW GRADE SCALE' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' , useHash : true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
