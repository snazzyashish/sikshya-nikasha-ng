import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent {
  private params: any;
  constructor(public modal:ModalService){
    
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

}
