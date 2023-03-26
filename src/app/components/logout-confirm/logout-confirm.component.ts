import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout-confirm',
  templateUrl: './logout-confirm.component.html',
  styleUrls: ['./logout-confirm.component.css']
})
export class LogoutConfirmComponent {
  constructor(public router:Router, public auth:AuthService){
  }

  onConfirmCLick(){
    this.auth.logout();
    // this.router.navigate(['/login']);
  }
}
