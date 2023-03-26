import { AuthGuard } from './services/auth-guard.service';
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
import { ViewSchoolComponent } from './components/view-school/view-school.component';
import { UpdateSchoolComponent } from './components/update-school/update-school.component';
import { FiscalYearComponent } from './components/fiscal-year/fiscal-year.component';
import { MagFormItemComponent } from './components/magform-item/magform-item.component';
import { SignatoryComponent } from './components/signatory/signatory.component';
import { AcademicYearComponent } from './components/academic-year/academic-year.component';
import { MagFormSettingComponent } from './components/magform-setting/magform-setting.component';
import { MagformSettingViewComponent } from './components/magform-setting-view/magform-setting-view.component';
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
import { AdministrativeSettingsListComponent } from './components/administrative-settings-list/administrative-settings-list.component';
import { CreateAdministrativeSettingsComponent } from './components/create-administrative-settings/create-administrative-settings.component';
import { ViewAdminitrativeSettingsComponent } from './components/view-administrative-settings/view-administrative-settings.component';
import { InfrastructureScaleListComponent } from './components/insfrastructure-scale-list/insfrastructure-scale-list.component';
import { CreateInsfrastructureScaleComponent } from './components/create-insfrastructure-scale/create-insfrastructure-scale.component';
import { ViewInsfrastructureScaleComponent } from './components/view-insfrastructure-scale/view-insfrastructure-scale.component';
import { StationaryKhajaScaleListComponent } from './components/stationary-khaja-scale-list/stationary-khaja-scale-list.component';
import { ViewStationaryKhajaScaleComponent } from './components/view-stationary-khaja-scale/view-stationary-khaja-scale.component';
import { CreateStationaryKhajaScaleComponent } from './components/create-stationary-khaja-scale/create-stationary-khaja-scale.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { ScholarshipSettingsComponent } from './components/scholarship-settings/scholarship-settings.component';
import { EmployeeBhattaComponent } from './components/employee-bhatta/employee-bhatta.component';
import { CreateEmployeeBhattaComponent } from './components/create-employee-bhatta/create-employee-bhatta.component';
import { MagformSettingItemdetailComponent } from './components/magform-setting-itemdetail/magform-setting-itemdetail.component';
import { CreateScholarshipAmountComponent } from './components/create-scholarship-amount/create-scholarship-amount.component';
import { AdministrativeExpensesDetailComponent } from './components/administrative-expenses-detail/administrative-expenses-detail.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path:  'login', component:  LoginComponent, data: { title: 'LOGIN' }},
  { path:  'home', component:  DashboardComponent,canActivate: [AuthGuard], data: { title: 'DASHBOARD' }},
  { path:  'change-password', component:  ChangePasswordComponent, canActivate: [AuthGuard], data: { title: 'CHANGE PASSWORD' }},

  { path:  'schools-list', component:  SchoolsListComponent, canActivate: [AuthGuard], data: { title: 'LIST SCHOOLS' }},
  { path:  'school/view/:id', component:  ViewSchoolComponent, canActivate: [AuthGuard], data: { title: 'VIEW SCHOOL' }},
  { path:  'school/update/:id', component:  UpdateSchoolComponent, canActivate: [AuthGuard], data: { title: 'UPDATE SCHOOL' }},
  { path:  'school/create', component:  UpdateSchoolComponent, canActivate: [AuthGuard], data: { title: 'ADD SCHOOL' }},

  { path:  'users-list', component:  UsersListComponent, canActivate: [AuthGuard], data: { title: 'LIST USERS' }},
  { path:  'fiscal-year', component:  FiscalYearComponent, canActivate: [AuthGuard], data: { title: 'LIST FISCAL YEARS' }},
  { path:  'academic-year', component:  AcademicYearComponent, canActivate: [AuthGuard], data: { title: 'LIST ACADEMIC YEARS' }},
  { path:  'signatory', component:  SignatoryComponent, canActivate: [AuthGuard], data: { title: 'LIST SIGNATORY' }},
  { path:  'scholarship/list', component:  ScholarshipListComponents, canActivate: [AuthGuard], data: { title: 'LIST SCHOLARSHIP' }},
  { path:  'stationary/list', component:  StationaryComponent, canActivate: [AuthGuard], data: { title: 'LIST STATIONARY' }},
  { path:  'administrative-expenses', component:  AdministrativeExpensesComponent, canActivate: [AuthGuard], data: { title: 'LIST ADMINISTRATIVE EXPENSES' }},
  { path:  'infrastructure/list', component:  InfrastructureListComponent, canActivate: [AuthGuard], data: { title: 'LIST INSFRASTRUCTURES' }},

  { path:  'magform-item-list', component:  MagFormItemComponent, canActivate: [AuthGuard], data: { title: 'LIST MAGFORM ITEMS' }},
  { path:  'magform-setting', component:  MagFormSettingComponent, canActivate: [AuthGuard], data: { title: 'LIST MAGFORM SETTING' }},
  { path:  'magform-setting/view/:id', component:  MagformSettingViewComponent, canActivate: [AuthGuard], data: { title: 'VIEW MAGFORM SETTING' }},
  { path:  'magform-setting/itemDetail/:id', component:  MagformSettingItemdetailComponent, canActivate: [AuthGuard], data: { title: 'ADD/REMOVE MAGFORM DETAIL' }},

  { path:  'employee-detail/list', component:  EmployeeDetailComponent, canActivate: [AuthGuard], data: { title: 'LIST EMPLOYEE DETAIL' }},
  { path:  'employee-detail/update/:id', component:  EmployeeDetailUpdateComponent, canActivate: [AuthGuard], data: { title: 'UPDATE EMPLOYEE DETAIL' }},
  { path:  'employee-detail/create', component:  EmployeeDetailUpdateComponent, canActivate: [AuthGuard], data: { title: 'CREATE EMPLOYEE DETAIL' }},
  { path:  'employee-detail/view/:id', component:  EmployeeDetailViewComponent, canActivate: [AuthGuard], data: { title: 'VIEW EMPLOYEE DETAIL' }},


  
  { path:  'grade-limit/list', component:  GradeLimitComponent, canActivate: [AuthGuard], data: { title: 'LIST GRADE LIMIT' }},
  { path:  'grade-limit/create', component:  CreateGradeLimitComponent, canActivate: [AuthGuard], data: { title: 'CREATE GRADE LIMIT' }},
  { path:  'grade-limit/update/:id', component:  CreateGradeLimitComponent, canActivate: [AuthGuard], data: { title: 'UPDATE GRADE LIMIT' }},
  { path:  'grade-limit/view/:id', component:  GradeLimitViewComponent, canActivate: [AuthGuard], data: { title: 'VIEW GRADE LIMIT' }},

  { path:  'basic-scale/list', component:  BasicScaleListComponent, canActivate: [AuthGuard], data: { title: 'LIST BASIC SCALE' }},
  { path:  'basic-scale/create', component:  CreateBasicScaleComponent, canActivate: [AuthGuard], data: { title: 'CREATE BASIC SCALE' }},
  { path:  'basic-scale/update/:id', component:  CreateBasicScaleComponent, canActivate: [AuthGuard], data: { title: 'UPDATE BASIC SCALE' }},
  { path:  'basic-scale/view/:id', component:  ViewBasicScaleComponent, canActivate: [AuthGuard], data: { title: 'VIEW BASIC SCALE' }},

  { path:  'grade-scale/list', component:  GradeScaleListComponent, canActivate: [AuthGuard], data: { title: 'LIST GRADE SCALE' }},
  { path:  'grade-scale/create', component:  GradeScaleCreateComponent, canActivate: [AuthGuard], data: { title: 'CREATE GRADE SCALE' }},
  { path:  'grade-scale/update/:id', component:  GradeScaleCreateComponent, canActivate: [AuthGuard], data: { title: 'UPDATE GRADE SCALE' }},
  { path:  'grade-scale/view/:id', component:  GradeScaleViewComponent, canActivate: [AuthGuard], data: { title: 'VIEW GRADE SCALE' }},

  { path:  'admin-setting/list', component:  AdministrativeSettingsListComponent, canActivate: [AuthGuard], data: { title: 'LIST ADMINISTRATIVE SCALE' }},
  { path:  'admin-setting/create', component:  CreateAdministrativeSettingsComponent, canActivate: [AuthGuard], data: { title: 'CREATE ADMINISTRATIVE SCALE' }},
  { path:  'admin-setting/update/:id', component:  CreateAdministrativeSettingsComponent, canActivate: [AuthGuard], data: { title: 'UPDATE ADMINISTRATIVE SCALE' }},
  { path:  'admin-setting/view/:id', component:  ViewAdminitrativeSettingsComponent, canActivate: [AuthGuard], data: { title: 'VIEW ADMINISTRATIVE SCALE' }},
  
  { path:  'infrastructure-scale/list', component:  InfrastructureScaleListComponent, canActivate: [AuthGuard], data: { title: 'LIST INFRASTRUCTURE SCALE' }},
  { path:  'infrastructure-scale/create', component:  CreateInsfrastructureScaleComponent, canActivate: [AuthGuard], data: { title: 'CREATE INFRASTRUCTURE SCALE' }},
  { path:  'infrastructure-scale/update/:id', component:  CreateInsfrastructureScaleComponent, canActivate: [AuthGuard], data: { title: 'UPDATE INFRASTRUCTURE SCALE' }},
  { path:  'infrastructure-scale/view/:id', component:  ViewInsfrastructureScaleComponent, canActivate: [AuthGuard], data: { title: 'VIEW INFRASTRUCTURE SCALE' }},
  
  { path:  'stationary-khaja/list', component:  StationaryKhajaScaleListComponent, canActivate: [AuthGuard], data: { title: 'STATIONERY/DIWA KHAJA FINANCIAL SETTING LIST CLASS WISE' }},
  { path:  'stationary-khaja/create', component:  CreateStationaryKhajaScaleComponent, canActivate: [AuthGuard], data: { title: 'GENERATE CLASSWISE FINANCIAL SETTING' }},
  { path:  'stationary-khaja/view/:id', component:  ViewStationaryKhajaScaleComponent, canActivate: [AuthGuard], data: { title: 'VIEW CLASSWISE FINANCIAL SETTING' }},
  { path:  'stationary-khaja/update/:id', component:  CreateStationaryKhajaScaleComponent, canActivate: [AuthGuard], data: { title: 'UPDATE CLASSWISE FINANCIAL SETTING' }},
  
  { path:  'user-management', component:  UserManagementComponent, canActivate: [AuthGuard], data: { title: 'USER MANAGEMENT' }},
  { path:  'user/create', component:  UserCreateComponent, canActivate: [AuthGuard], data: { title: 'CREATE USER' }},
  { path:  'user/update/:id', component:  UserCreateComponent, canActivate: [AuthGuard], data: { title: 'CREATE USER' }},

  { path:  'scholarship-setting', component:  ScholarshipSettingsComponent, canActivate: [AuthGuard], data: { title: 'SCHOLARSHIP SETTING' }},
  
  { path:  'employee-bhatta', component:  EmployeeBhattaComponent, canActivate: [AuthGuard], data: { title: 'EMPLOYEE BHATTA' }},
  
  { path:  'employee-bhatta/create', component:  CreateEmployeeBhattaComponent, canActivate: [AuthGuard], data: { title: 'CREATE EMPLOYEE BHATTA' }},
  { path:  'employee-bhatta/update/:id', component:  CreateEmployeeBhattaComponent, canActivate: [AuthGuard], data: { title: 'EDIT EMPLOYEE BHATTA' }},
  
  { path:  'scholarship-amount/create', component:  CreateScholarshipAmountComponent, canActivate: [AuthGuard], data: { title: 'ADD SCHOLARSHIP AMOUNT' }},
  { path:  'scholarship-amount/update/:id', component:  CreateScholarshipAmountComponent, canActivate: [AuthGuard], data: { title: 'EDIT SCHOLARSHIP AMOUNT' }},
  
  { path:  'administrative-expenses-detail/:id', component:  AdministrativeExpensesDetailComponent, canActivate: [AuthGuard], data: { title: 'प्रशासनिक खर्च विवण भर्नुस' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' , useHash : true})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
