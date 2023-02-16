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
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { FiscalYearComponent } from './components/fiscal-year/fiscal-year.component';
import { MagFormItemComponent } from './components/magform-item/magform-item.component';
import { SignatoryComponent } from './components/signatory/signatory.component';
import { AcademicYearComponent } from './components/academic-year/academic-year.component';
import { MagFormSettingComponent } from './components/magform-setting/magform-setting.component';
import { GradeLimitsComponent } from './components/grade-limits/grade-limits.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeDetailUpdateComponent } from './components/employee-detail-update/employee-detail-update.component';

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
    DeleteDialogComponent,
    FiscalYearComponent,
    MagFormItemComponent,
    SignatoryComponent,
    AcademicYearComponent,
    MagFormSettingComponent,
    GradeLimitsComponent,
    EmployeeDetailComponent,
    EmployeeDetailUpdateComponent
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
