import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd   } from '@angular/router';
import { LogoutConfirmComponent } from './components/logout-confirm/logout-confirm.component';
import { SITE_HEADER } from './data/constants';
import { ToastifyService } from './services/toastify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('confirmDialog') confirmDialog!: ElementRef;
  title = 'ng-app';
  currentRoute:any;
  siteHeader = SITE_HEADER;
  constructor(public route:ActivatedRoute, public router:Router, public toastify:ToastifyService){
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentRoute = val.url;
      }
  });
  }

  ngOnInit(): void {
  }

  onLogoutClick(){
    this.toastify.openDialog(LogoutConfirmComponent)
  }
}
