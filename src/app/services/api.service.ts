import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public serverUrl = 'http://localhost:8000/'
  constructor(public _http : HttpService) { }

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

  public saveUser(params:any){
    let url = 'user/save';
    return this._http.postJson(url, params);
  }
  public deleteUser(params:any){
    let url = 'user/delete';
    return this._http.postJson(url, params);
  }
  
  public listGroups(params:any){
    let url = 'group/list';
    return this._http.getRequest(url, params);
  }

  public saveGroup(params:any){
    let url = 'group/save';
    return this._http.postJson(url, params);
  }
  public deleteGroup(params:any){
    let url = 'group/delete';
    return this._http.postJson(url, params);
  }

  public saveAccountProfile(params:any){
    let url = 'save-user-profile';
    return this._http.postJson(url, params);
  }

  public saveAccountSecurity(params:any){
    let url = 'save-user-security';
    return this._http.postJson(url, params);
  }

  
  public listTransaction(params:any){
    var url = 'transaction/list';
    return this._http.getRequest(url, params);
  }

  public listPlayers(params:any){
    var url = 'transaction/players';
    return this._http.postJson(url, params);
  }

  public listLatestTransaction(params:any){
    var url = 'transaction/list?filter=latest';
    return this._http.getRequest(url, params);
  }
  
  public saveTransaction(params:any){
    let url = 'transaction/save';
    return this._http.postJson(url, params);
  }
  public deleteTransaction(params:any){
    let url = 'transaction/delete';
    return this._http.postJson(url, params);
  }

  public listSchedule(params:any){
    let url = 'schedule/list';
    return this._http.getRequest(url, params);
  }

  public saveSchedule(params:any){
    let url = 'schedule/save';
    return this._http.postJson(url, params);
  }

  public deleteSchedule(params:any){
    let url = 'schedule/delete';
    return this._http.postJson(url, params);
  }

  public listDocs(params:any){
    let url = 'file/list';
    return this._http.getRequest(url, params);
  }

  public listGames(params:any){
    let url = 'store/list';
    return this._http.getRequest(url, params);
  }

  public saveGame(params:any){
    let url = 'store/save';
    return this._http.postJson(url, params);
  }

  public listStaff(params:any){
    let url = 'staff/list';
    return this._http.getRequest(url, params);
  }

  public saveStaff(params:any){
    let url = 'staff/save';
    return this._http.postJson(url, params);
  }

  public deleteStaff(params:any){
    let url = 'staff/delete';
    return this._http.postJson(url, params);
  }

  public listStoreCredentials(params:any){
    let url = 'store-credentials/list';
    return this._http.getRequest(url, params);
  }

  public saveStoreCredentials(params:any){
    let url = 'store-credentials/save';
    return this._http.postJson(url, params);
  }

  public deleteStoreCredentials(params:any){
    let url = 'store-credentials/delete';
    return this._http.postJson(url, params);
  }

  public listWallet(params:any){
    let url = 'wallet/list';
    return this._http.getRequest(url, params);
  }

  public saveWallet(params:any){
    let url = 'wallet/save';
    return this._http.postJson(url, params);
  }

  public deleteWallet(params:any){
    let url = 'wallet/delete';
    return this._http.postJson(url, params);
  }

  public listFbCredential(params:any){
    let url = 'fb-cred/list';
    return this._http.getRequest(url, params);
  }

  public saveFbCredential(params:any){
    let url = 'fb-cred/save';
    return this._http.postJson(url, params);
  }

  public deleteFbCredential(params:any){
    let url = 'fb-cred/delete';
    return this._http.postJson(url, params);
  }

  public listGmailCredential(params:any){
    let url = 'gmail-cred/list';
    return this._http.getRequest(url, params);
  }

  public saveGmailCredential(params:any){
    let url = 'gmail-cred/save';
    return this._http.postJson(url, params);
  }

  public deleteGmailCredential(params:any){
    let url = 'gmail-cred/delete';
    return this._http.postJson(url, params);
  }

  public listVpnCedential(params:any){
    let url = 'vpn-cred/list';
    return this._http.getRequest(url, params);
  }

  public saveVpnCedential(params:any){
    let url = 'vpn-cred/save';
    return this._http.postJson(url, params);
  }

  public deleteVpnCedential(params:any){
    let url = 'vpn-cred/delete';
    return this._http.postJson(url, params);
  }

  public checkUser(params:any){
    let url = 'user/check-user';
    return this._http.postJson(url, params);
  }

  public resetPassword(params:any){
    let url = 'user/reset-password';
    return this._http.postJson(url, params);
  }

  public listReport(params:any){
    let url = 'report/list';
    return this._http.getRequest(url, params);
  }

  public listGroupTransactionSummary(params:any){
    let url = 'transaction/group-summary';
    return this._http.postJson(url, params);
  }
}
