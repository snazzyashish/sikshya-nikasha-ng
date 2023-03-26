import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:FormGroup;
  constructor(public toastify:AlertService, public auth:AuthService, public fb:FormBuilder, public api:ApiService, public router:Router){
    if(this.auth.checkLogin()){
      this.router.navigate(['/home']);
    }else{

    }
    this.loginForm = this.fb.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  onFormSubmit(){
    this.api.login(this.loginForm.value).subscribe(res=>{
      if(res.success){
        localStorage.setItem('userInfo', JSON.stringify(res.data))
        this.router.navigate(['/home']);
        this.toastify.openSnackBar('Login Success', 'OK');
      }
    })
  }
}
