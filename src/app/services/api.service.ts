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
}
