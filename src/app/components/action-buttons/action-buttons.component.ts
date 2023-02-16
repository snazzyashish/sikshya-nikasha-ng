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
    'employee-detail'
  ]
  constructor(public modal:ModalService, public router:Router){
  }

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(event: any, type:any) {
    this.params.clicked(this.params.value, type);
  }

  refresh() {
    return false;
  }

  checkRoute(){
    if(this.router.url.includes(this.showViewIconsRoute)){
      return true;
    }else{
      return false;
    }
  }

}
