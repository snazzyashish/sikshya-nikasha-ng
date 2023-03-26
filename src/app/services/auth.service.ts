import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router:Router) { }

  getUserInfo(){
    var userInfo = localStorage.getItem('userInfo');
    if(userInfo){
      userInfo = JSON.parse(userInfo);
    }
    return userInfo;
  }

  show(role:any = []){
    var user:any = {};
        user = this.getUserInfo();
    if(role.includes(user.user_role)){
      return true;
    }else{
      return false;
    }
  }

  hide(role:any = []){
    var user:any = {};
        user = this.getUserInfo();
    if(role.includes(JSON.parse(user.user_role))){
      return true;
    }else{
      return false;
    }
  }

  checkLogin(){
    var userInfo = localStorage.getItem('userInfo');
    if(userInfo){
      userInfo = JSON.parse(userInfo);
    }
    var isLoggedIn = userInfo ? true : false ;
    return isLoggedIn;
  }

  hideCellValues(cell:any){
    let userInfo:any = this.getUserInfo();
    if(userInfo.user_role == "1"){
      return cell.value;
    }else{
      return '******'
    }
  }

  checkCellEditable(){
    let userInfo:any = this.getUserInfo();
    if(userInfo.user_role == "1"){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
