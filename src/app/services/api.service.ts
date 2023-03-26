import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../data/constants';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public serverUrl = SERVER_API_URL;
  constructor(public _http : HttpService) {}

  public getDashboardData(params:any){
    let url = 'dashboard/get-dashboard-data';
    return this._http.postJson(url,params);
  }

  public getLabels(params:any){
    let url = 'dashboard/get-labels';
    return this._http.postJson(url,params);
  }

  public getUserInfo(){
    var userInfo = localStorage.getItem('userInfo');
      if(userInfo){
        userInfo = JSON.parse(userInfo);
      }
      return userInfo;
  }
  
  public login(params:any){
    let url = 'login';
    return this._http.postJson(url,params);
  }
  public logout(params:any){
    let url = 'logout';
    return this._http.postJson(url,params);
  }

  public signup(params:any){
    let url = 'register';
    return this._http.postJson(url,params);
  }

  public getCurrentUser(params:any){
    let url = 'get-user';
    params = {
      'id' : params.userInfo.id
    }
    return this._http.postJson(url, params);
  }

  public getAllUsers(params:any){
    let url = 'user/list';
    return this._http.getRequest(url, params);
  }

  //------------------------------------------------------------------//

  public listUsers(params:any){
    let url = 'user/list';
    return this._http.getRequest(url, params);

  }
  public viewUser(params:any){
    let url = 'user/'+params.id;
    return this._http.getRequest(url,{});

  }
  public saveUser(params:any){
    let url = 'user/save';
    return this._http.postJson(url, params);
  }

  //------------------------------------------------------------------//

  public listEmployees(params:any){
    let url = 'employee/list';
    return this._http.getRequest(url, params);

  }
  public viewEmployee(params:any){
    let url = 'employee/view/'+params.id;
    return this._http.getRequest(url,{});

  }
  public saveEmployees(params:any){
    let url = 'employee/save';
    return this._http.postJson(url, params);
  }

  public udpdateEmployees(params:any){
    let url = 'employee/update/'+params.id;
    return this._http.postJson(url, params);
  }


  public searchEmployees(params:any){
    let url = 'employee/search';
    return this._http.postJson(url, params);
  }
  //------------------------------------------------------------------//
  public listSchools(params:any){
    let url = 'school/list';
    return this._http.getRequest(url, params);

  }
  public viewSchool(params:any){
    let url = 'school/view/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveSchool(params:any){
    let url = 'school/save';
    return this._http.postJson(url, params);

  }
  public saveSchoolGrid(params:any){
    let url = 'school/save';
    return this._http.postJson(url, params);
  }
  public updateSchool(params:any){
    let url = 'school/update/'+params.id;
    return this._http.postJson(url, params);
  }
  //------------------------------------------------------------------//
  public listEmployeeBhatta(params:any){
    let url = 'employeeAllowanceScale/list';
    return this._http.getRequest(url, params);

  }
  public viewEmployeeBhatta(params:any){
    let url = 'employeeAllowanceScale/view/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveEmployeeBhatta(params:any){
    let url = 'employeeAllowanceScaleScale/save';
    return this._http.postJson(url, params);

  }
  public updateEmployeeBhatta(params:any){
    let url = 'employeeAllowanceScale/update/'+params.id;
    return this._http.postJson(url, params);

  }
  public saveEmployeeBhattaGrid(params:any){
    let url = 'employeeAllowanceScale/save';
    return this._http.postJson(url, params);
  }
  //------------------------------------------------------------------//
  public listSignature(params:any){
    let url = 'signature/list';
    return this._http.getRequest(url, params);

  }
  public viewSignature(params:any){
    let url = 'signature/'+params.id;
    return this._http.getRequest(url, {});

  }
  public updateSignature(params:any){
    let url = 'signature/update/'+params.id;
    return this._http.postJson(url, params);

  }
  public saveSignature(params:any){
    let url = 'signature/save';
    return this._http.postJson(url, params);

  }
  //------------------------------------------------------------------//
  public listFiscalYear(params:any){
    let url = 'fiscalyear/list';
    return this._http.getRequest(url, params);

  }
  public viewFiscalYear(params:any){
    let url = 'fiscalyear/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveFiscalYear(params:any){
    let url = 'fiscalyear/save';
    return this._http.postJson(url, params);
  }
  public updateFiscalYear(params:any){
    let url = 'fiscalyear/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteFiscalYear(params:any){
    let url = 'fiscalyear/delete/'+params.id;
    return this._http.postJson(url, params);
  }
  //------------------------------------------------------------------//
  public listAcademicYear(params:any){
    let url = 'educationyear/list';
    return this._http.getRequest(url, params);

  }
  public viewAcademicYear(params:any){
    let url = 'educationyear/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveAcademicYear(params:any){
    let url = 'educationyear/save';
    return this._http.postJson(url, params);

  }
  public updateAcademicYear(params:any){
    let url = 'educationyear/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteAcademicYear(params:any){
    let url = 'educationyear/delete/'+params.id;
    return this._http.postJson(url, params);
  }
  //------------------------------------------------------------------//
  public listEmployeeGradeLimit(params:any){
    let url = 'employeegradelimit/list';
    return this._http.getRequest(url, params);

  }
  public viewEmployeeGradeLimit(params:any){
    let url = 'employeegradelimit/view/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveEmployeeGradeLimit(params:any){
    let url = 'employeegradelimit/save';
    return this._http.postJson(url, params);

  }
  public updateEmployeeGradeLimit(params:any){
    let url = 'employeegradelimit/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteEmployeeGradeLimit(params:any){
    let url = 'employeegradelimit/delete/'+params.id;
    return this._http.postJson(url, params);
  }
  //------------------------------------------------------------------//

   public listScholarship(params:any){
    let url = 'scholarship/list';
    return this._http.getRequest(url, params);

  }
  public viewScholarship(params:any){
    let url = 'scholarship/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveScholarship(params:any){
    let url = 'scholarship/save';
    return this._http.postJson(url, params);

  }
  public updateScholarship(params:any){
    let url = 'scholarship/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteScholarship(params:any){
    let url = 'scholarship/delete/'+params.id;
    return this._http.postJson(url, params);
  }
   //------------------------------------------------------------------//
   public listStationary(params:any){
    let url = 'studymaterial/list';
    return this._http.getRequest(url, params);

  }
  public viewStationary(params:any){
    let url = 'studymaterial/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveStationary(params:any){
    let url = 'studymaterial/save';
    return this._http.postJson(url, params);

  }
  public updateStationary(params:any){
    let url = 'studymaterial/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteStationary(params:any){
    let url = 'studymaterial/delete/'+params.id;
    return this._http.postJson(url, params);
  }
   //------------------------------------------------------------------//
   public listMagformFiscalYear(params:any){
    let url = 'salarysheet/list';
    return this._http.getRequest(url, params);

  }
  public viewMagformFiscalYear(params:any){
    let url = 'salarysheet/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveMagformFiscalYear(params:any){
    let url = 'salarysheet/save';
    return this._http.postJson(url, params);

  }
  public updateMagformFiscalYear(params:any){
    let url = 'salarysheet/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteMagformFiscalYear(params:any){
    let url = 'salarysheet/delete/'+params.id;
    return this._http.postJson(url, params);
  }
   //------------------------------------------------------------------//
   public listEmployeeSalaryScale(params:any){
    let url = 'employeesalaryscale/list';
    return this._http.getRequest(url, params);

  }
  public viewEmployeeSalaryScale(params:any){
    let url = 'employeesalaryscale/view/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveEmployeeSalaryScale(params:any){
    let url = 'employeesalaryscale/save';
    return this._http.postJson(url, params);

  }
  public updateEmployeeSalaryScale(params:any){
    let url = 'employeesalaryscale/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteEmployeeSalaryScale(params:any){
    let url = 'employeesalaryscale/delete/'+params.id;
    return this._http.postJson(url, params);
  }
   //------------------------------------------------------------------//
   public listEmployeeGradeScale(params:any){
    let url = 'employeegradescale/list';
    return this._http.getRequest(url, params);

  }
  public viewEmployeeGradeScale(params:any){
    let url = 'employeegradescale/view/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveEmployeeGradeScale(params:any){
    let url = 'employeegradescale/save';
    return this._http.postJson(url, params);

  }
  public updateEmployeeGradeScale(params:any){
    let url = 'employeegradescale/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteEmployeeGradeScale(params:any){
    let url = 'employeegradescale/delete/'+params.id;
    return this._http.postJson(url, params);
  }
   //------------------------------------------------------------------//
   public listLunchScale(params:any){
    let url = 'lunchScale/list';
    return this._http.getRequest(url, params);

  }
  public viewLunchScale(params:any){
    let url = 'lunchScale/view/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveLunchScale(params:any){
    let url = 'lunchScale/save';
    return this._http.postJson(url, params);

  }
  public updateLunchScale(params:any){
    let url = 'lunchScale/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteLunchScale(params:any){
    let url = 'lunchScale/delete/'+params.id;
    return this._http.postJson(url, params);
  }
   //------------------------------------------------------------------//
   public listScholarshipScale(params:any){
    let url = 'scholarshipScale/list';
    return this._http.getRequest(url, params);

  }
  public viewScholarshipScale(params:any){
    let url = 'scholarshipScale/view/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveScholarshipScale(params:any){
    let url = 'scholarshipScale/save';
    return this._http.postJson(url, params);

  }
  public updateScholarshipScale(params:any){
    let url = 'scholarshipScale/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteScholarshipScale(params:any){
    let url = 'scholarshipScale/delete/'+params.id;
    return this._http.postJson(url, params);
  }
   //------------------------------------------------------------------//
  public listInfrastructureScale(params:any){
    let url = 'infrastructureScale/list';
    return this._http.getRequest(url, params);

  }
  public viewInfrastructureScale(params:any){
    let url = 'infrastructureScale/view/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveInfrastructureScale(params:any){
    let url = 'infrastructureScale/save';
    return this._http.postJson(url, params);

  }
  public updateInfrastructureScale(params:any){
    let url = 'infrastructureScale/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteInfrastructureScale(params:any){
    let url = 'infrastructureScale/delete/'+params.id;
    return this._http.postJson(url, params);
  }
   //------------------------------------------------------------------//
   public listAdministrationScale(params:any){
    let url = 'administrationScale/list';
    return this._http.getRequest(url, params);

  }
  public viewAdministrationScale(params:any){
    let url = 'administrationScale/view/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveAdministrationScale(params:any){
    let url = 'administrationScale/save';
    return this._http.postJson(url, params);

  }
  public updateAdministrationScale(params:any){
    let url = 'administrationScale/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteAdministrationScale(params:any){
    let url = 'administrationScale/delete/'+params.id;
    return this._http.postJson(url, params);
  }
   //------------------------------------------------------------------//
   public listAdministration(params:any){
    let url = 'administration/list';
    return this._http.getRequest(url, params);

  }
  public viewAdministration(params:any){
    let url = 'administration/view/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveAdministration(params:any){
    let url = 'administration/save';
    return this._http.postJson(url, params);

  }
  public updateAdministration(params:any){
    let url = 'administration/update/'+params.id;
    return this._http.postJson(url, params);
  }
  public deleteAdministration(params:any){
    let url = 'administration/delete/'+params.id;
    return this._http.postJson(url, params);
  }
   //------------------------------------------------------------------//

}
