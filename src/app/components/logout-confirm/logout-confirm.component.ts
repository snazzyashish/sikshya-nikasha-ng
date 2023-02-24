import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-confirm',
  templateUrl: './logout-confirm.component.html',
  styleUrls: ['./logout-confirm.component.css']
})
export class LogoutConfirmComponent {
  constructor(public router:Router){
  }

  onConfirmCLick(){
    this.router.navigate(['/login']);
  }
}
