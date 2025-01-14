import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent {
  private params: any;
  public showViewIconsRoute:any = [
    '/employee-detail/list',
    '/schools-list',
    '/grade-limit/list',
    '/basic-scale/list',
    '/grade-scale/list',
    '/admin-setting/list',
    '/infrastructure-scale/list',
    '/users-list',
    '/magform-setting'

  ]
  constructor(public modal:ModalService, public router:Router){
  }

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(event: any, type:any) {
    this.params.clicked(this.params.data.id, type);
  }

  refresh() {
    return false;
  }

  checkRoute(){
    if(this.showViewIconsRoute.includes(this.router.url)){
      return true;
    }else{
      return false;
    }
  }

}
