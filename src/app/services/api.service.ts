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
  //------------------------------------------------------------------//

  public listEmployees(params:any){
    let url = 'employee/list';
    return this._http.getRequest(url, params);

  }
  public viewEmployee(params:any){
    let url = 'employee/'+params.id;
    return this._http.getRequest(url,{});

  }
  public saveEmployees(params:any){
    let url = 'employee';
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
    let url = 'school/'+params.id;
    return this._http.getRequest(url, {});

  }
  public saveSchool(params:any){
    let url = 'school';
    return this._http.postJson(url, params);

  }
  public saveSchoolGrid(params:any){
    let url = 'school/save';
    return this._http.postJson(url, params);
  }
  //------------------------------------------------------------------//
}
