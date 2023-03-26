import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataTablesModule } from "angular-datatables";
import { AgGridModule } from 'ag-grid-angular';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SchoolsListComponent } from './components/schools-list/schools-list.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { FiscalYearComponent } from './components/fiscal-year/fiscal-year.component';
import { MagFormItemComponent } from './components/magform-item/magform-item.component';
import { SignatoryComponent } from './components/signatory/signatory.component';
import { AcademicYearComponent } from './components/academic-year/academic-year.component';
import { MagFormSettingComponent } from './components/magform-setting/magform-setting.component';
import { GradeLimitsComponent } from './components/grade-limits/grade-limits.component';
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
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { BasicScaleListComponent } from './components/basic-scale-list/basic-scale-list.component';
import { CreateBasicScaleComponent } from './components/create-basic-scale/create-basic-scale.component';
import { ViewBasicScaleComponent } from './components/view-basic-scale/view-basic-scale.component';
import { GradeScaleListComponent } from './components/grade-scale-list/grade-scale-list.component';
import { GradeScaleViewComponent } from './components/grade-scale-view/grade-scale-view.component';
import { GradeScaleCreateComponent } from './components/grade-scale-create/grade-scale-create.component';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { LogoutConfirmComponent } from './components/logout-confirm/logout-confirm.component';
import { AdministrativeSettingsListComponent } from './components/administrative-settings-list/administrative-settings-list.component';
import { CreateAdministrativeSettingsComponent } from './components/create-administrative-settings/create-administrative-settings.component';
import { ViewAdminitrativeSettingsComponent } from './components/view-administrative-settings/view-administrative-settings.component';
import { ViewInsfrastructureScaleComponent } from './components/view-insfrastructure-scale/view-insfrastructure-scale.component';
import { CreateInsfrastructureScaleComponent } from './components/create-insfrastructure-scale/create-insfrastructure-scale.component';
import { InfrastructureScaleListComponent } from './components/insfrastructure-scale-list/insfrastructure-scale-list.component';
import { StationaryKhajaScaleListComponent } from './components/stationary-khaja-scale-list/stationary-khaja-scale-list.component';
import { ViewStationaryKhajaScaleComponent } from './components/view-stationary-khaja-scale/view-stationary-khaja-scale.component';
import { CreateStationaryKhajaScaleComponent } from './components/create-stationary-khaja-scale/create-stationary-khaja-scale.component';
import { ViewSchoolComponent } from './components/view-school/view-school.component';
import { UpdateSchoolComponent } from './components/update-school/update-school.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { ScholarshipSettingsComponent } from './components/scholarship-settings/scholarship-settings.component';
import { EmployeeBhattaComponent } from './components/employee-bhatta/employee-bhatta.component';
import { CreateEmployeeBhattaComponent } from './components/create-employee-bhatta/create-employee-bhatta.component';
import { MagformSettingViewComponent } from './components/magform-setting-view/magform-setting-view.component';
import { MagformSettingItemdetailComponent } from './components/magform-setting-itemdetail/magform-setting-itemdetail.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    ChangePasswordComponent,
    UsersListComponent,
    SchoolsListComponent,
    ActionButtonsComponent,
    FiscalYearComponent,
    MagFormItemComponent,
    SignatoryComponent,
    AcademicYearComponent,
    MagFormSettingComponent,
    GradeLimitsComponent,
    EmployeeDetailComponent,
    EmployeeDetailUpdateComponent,
    EmployeeDetailViewComponent,
    ScholarshipListComponents,
    StationaryComponent,
    AdministrativeExpensesComponent,
    InfrastructureListComponent,
    GradeLimitComponent,
    CreateGradeLimitComponent,
    GradeLimitViewComponent,
    PageHeaderComponent,
    BasicScaleListComponent,
    CreateBasicScaleComponent,
    ViewBasicScaleComponent,
    GradeScaleListComponent,
    GradeScaleViewComponent,
    GradeScaleCreateComponent,
    DeleteConfirmComponent,
    LogoutConfirmComponent,
    AdministrativeSettingsListComponent,
    CreateAdministrativeSettingsComponent,
    ViewAdminitrativeSettingsComponent,
    InfrastructureScaleListComponent,
    ViewInsfrastructureScaleComponent,
    CreateInsfrastructureScaleComponent,
    StationaryKhajaScaleListComponent,
    ViewStationaryKhajaScaleComponent,
    CreateStationaryKhajaScaleComponent,
    ViewSchoolComponent,
    UpdateSchoolComponent,
    UserManagementComponent,
    UserCreateComponent,
    ScholarshipSettingsComponent,
    EmployeeBhattaComponent,
    CreateEmployeeBhattaComponent,
    MagformSettingViewComponent,
    MagformSettingItemdetailComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    DataTablesModule,
    AgGridModule,
    AngularToastifyModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
